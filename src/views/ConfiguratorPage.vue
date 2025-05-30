<template>
  <div class="configurator-container">

    <!-- Stepper Navigation -->
    <!-- Stepper -->
    <StepperComponent
        :steps="steps"
        :current-step="currentStep"
        :last-completed-step="0"
        :on-toggle-step="toggleStep"
    />


    <div class="main-content">
      <!-- Step 1: Series and Model Selection -->
      <div v-if="currentStep === 0" class="step-content">
        <h2>Select Your House Plan</h2>

        <!-- Show series selection -->
        <!-- Series selection with images and descriptions -->
        <div v-if="!selectedSeries" class="series-card-row">
          <div
              v-for="series in seriesItems"
              :key="series.name"
              class="series-card"
              @click="selectSeries(series)"
          >
            <img class="series-img" :src="getSeriesImagePath(series.name)" alt="Series image" />
            <h3>{{ series.name.toUpperCase() }}</h3>
            <p>{{ getSeriesDescription(series.name) }}</p>
          </div>
        </div>



        <!-- Show the models of the selected series -->
        <div v-else class="model-card-row">
          <div
              v-for="model in selectedSeries.subItems"
              :key="model.name"
              class="model-card"
              :class="{ selected: selectedModel === model.name }"
              @click="selectModel(model)"
          >
            <img class="model-img" :src="getImagePath(model.image)" alt="Model image" />
            <h3>{{ model.name.toUpperCase() }}</h3>
            <p>{{ model.description }}</p>
            <ul class="model-info">
              <li><strong>Floor area:</strong> {{ model.variables.floorArea }}</li>
              <li><strong>Bedrooms:</strong> {{ model.variables.bedrooms }}</li>
              <li><strong>Bathrooms:</strong> {{ model.variables.bathrooms }}</li>
              <li><strong>Starting price:</strong> €{{ model.variables.price.toLocaleString() }}</li>
            </ul>
          </div>
        </div>

      </div>

      <div v-else-if="currentStep === 1 || currentStep === 2 || currentStep === 3" class="step-content">
        <!-- Layout step floating menu -->
        <LayoutPanel
            v-if="isModelLoaded"
            :model="model"
            :activeFloor="activeFloor"
            :setActiveFloor="setActiveFloor"
        />



        <div ref="viewer" class="model-viewer"></div>
      </div>



      <!-- Price Box (fixed bottom right corner) -->
      <Transition name="price-box">
        <div v-if="currentStep > 0" class="price-box">
          <p>Price: <strong>€{{ totalPrice.toLocaleString() }}</strong></p>
          <button class="details-btn">Show Details</button>
        </div>
      </Transition>

    </div>


    <!-- Toolbar (fixed bottom) -->
    <div class="toolbar-overlay">
      <ToolbarComponent
          :current-step="currentStep"
          :is-last-step="isLastStep"
          :on-previous="goToPreviousStep"
          :on-next="proceedToNextStep"
          :can-go-back="canGoBack"
          :can-go-next="canGoNext"
      />
    </div>




  </div>
</template>




<script setup>
// vue components and store
import { onMounted, watch } from "vue";
import { computed } from "vue";
import { useConfiguratorStore } from "@/store/configurator.js";
import StepperComponent from '@/components/Stepper.vue';
import ToolbarComponent from '@/components/Toolbar.vue';
import LayoutPanel from '@/components/LayoutPanel.vue';
import { ref } from 'vue';
// model and rendering
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from "gsap";
// Layout and customize




// Access the store from Pinia
const store = useConfiguratorStore();

// Computed
const steps = computed(() => store.menuItems);
const currentStep = computed(() => store.currentStep);
const selectedSeries = computed(() => store.selectedSeries);
const selectedModel = computed(() => store.selectedModel);
const isLastStep = computed(() => currentStep.value === store.menuItems.length - 1);
const seriesItems = computed(() => store.menuItems[0]?.subItems || []);

// Three.js variables
const viewer = ref(null); // Reference to the viewer container
const isModelLoaded = ref(false);

const activeFloor = ref("fullHouse");



let scene, perspectiveCamera, renderer, pivot, animationFrameId, controls;
let activeCamera; // ← uus muutja
let model = null;


const initThreeJs = () => {
  const container = viewer.value;
  if (!container) return;

  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  const aspect = container.clientWidth / container.clientHeight;
// PerspectiveCamera (3D jaoks)
  perspectiveCamera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  perspectiveCamera.position.set(4, 5, 11);
  activeCamera = perspectiveCamera;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xffffff); // ← tausta värv
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lisa OrbitControls
  controls = new OrbitControls(activeCamera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2;  // 90°


  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Ground
  // Ringikujuline põrand
  const textureLoader = new THREE.TextureLoader();
  const alphaMap = textureLoader.load(import.meta.env.BASE_URL + 'textures/ground-fade.png');

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0xeeeeee,
    side: THREE.DoubleSide,
    alphaMap: alphaMap,
    transparent: true,
  });


  const groundGeometry = new THREE.CircleGeometry(15, 64);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  scene.add(groundMesh);


  // Load the model
  const loader = new GLTFLoader();
  loader.load(

      import.meta.env.BASE_URL + 'models/TRIO150/model.glb',
      (gltf) => {
        model = gltf.scene;
        window._model = model;

        isModelLoaded.value = true;
        model.name = "houseModel"; // Optional, useful for debugging

        // Create a group for proper center rotation
        pivot = new THREE.Group();
        scene.add(pivot);

        // Add model to the pivot group
        pivot.add(model);

        // Scale the model up
        const scaleFactor = 0.7; // Adjust this value based on your needs
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Center the model on the plane
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Adjust the model's position within the pivot group
        model.position.set(-center.x, -box.min.y, -center.z);

        console.log("Model is now ready");
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
  );
  // Animation loop
  animate();
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  controls?.update();
  renderer.render(scene, activeCamera);

};


// Watcher: Initialize Three.js when entering step 2
import { nextTick } from 'vue'

watch(currentStep, async (newStep) => {
  await nextTick();

  if ((newStep === 1 || newStep === 2 || newStep === 3)) {
    if (!renderer && viewer.value) {
      initThreeJs();
      await nextTick();

    }
  }

  if (!controls || !activeCamera) return;

  // Common to all steps
  controls.object = perspectiveCamera;
  activeCamera = perspectiveCamera;
  controls.update();

  // Default reset
  controls.enableRotate = true;
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI;
  controls.minDistance = 0;
  controls.maxDistance = 100;


    if (newStep === 1) { // Step 1 (Layout 2D)

      // Top-down layout view
      controls.maxPolarAngle = Math.PI / 2.2;
      controls.enablePan = false;
      controls.minZoom = 0.5;
      controls.maxZoom = 2;

      const topDownPos = new THREE.Vector3(0, 13, 3);
      smoothCameraMoveWithTween(topDownPos, 1);

      if (pivot) pivot.rotation.set(0, 0, 0);


  } else if (newStep === 2) { // Customize view
      controls.maxPolarAngle = Math.PI / 2.2;
      controls.minDistance = 7;
      controls.maxDistance = 15;

      const customizePos = new THREE.Vector3(4, 5, 11);
      smoothCameraMoveWithTween(customizePos, 1);


  } else if (newStep === 3) { // // Save step
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 2.2;
      controls.minDistance = 7;
      controls.maxDistance = 15;

      const customizePos = new THREE.Vector3(6, 6, 9);
      smoothCameraMoveWithTween(customizePos, 1);

    }

});

// Animated camera

const smoothCameraMoveWithTween = (targetPosition, duration = 1) => {
  gsap.to(activeCamera.position, {
    x: targetPosition.x,
    y: targetPosition.y,
    z: targetPosition.z,
    duration: duration,
    ease: "power2.inOut", // ← Sujuv kiirendus ja aeglustus
    onUpdate: () => {
      activeCamera.lookAt(0, 0, -2); // Et kaamera jääks keskenduma mudelile
    },
  });
};

// Ensure Three.js is initialized on step 2 if component is mounted directly
onMounted(() => {
  if (currentStep.value === 1) {
    initThreeJs();
  }
});

// Actions

// Actions
const toggleStep = (index) => store.updateStep(index);

// Dynamic toolbar logic // Annab errorid
// [Vue warn]: Invalid prop: type check failed for prop "canGoNext". Expected Boolean, got String with value "Trio 150".
// [Vue warn]: Invalid prop: type check failed for prop "canGoBack". Expected Boolean, got Object
const canGoBack = computed(() => {
  return (
      currentStep.value === 0 && (selectedSeries.value || selectedModel.value)
  ) || currentStep.value > 0;
});

const canGoNext = computed(() => {
  return (
      (currentStep.value === 0 && selectedModel.value) ||
      (currentStep.value > 0 && currentStep.value < steps.value.length - 1)
  );
});

// Navigation functions
const goToPreviousStep = () => {
  if (currentStep.value === 0) {
    if (selectedModel.value) {
      store.selectModel(null);
    } else if (selectedSeries.value) {
      store.selectSeries(null);
    }
  } else {
    store.updateStep(currentStep.value - 1);
  }
};

const proceedToNextStep = () => {
  if (currentStep.value === 0 && selectedModel.value) {
    store.updateStep(1);
  } else if (currentStep.value < steps.value.length - 1) {
    store.updateStep(currentStep.value + 1);
  }
};


// Actions for series and model selection
const selectSeries = (series) => store.selectSeries(series);
const selectModel = (model) => store.selectModel(model);


// funktsioonid seeriatele ja mudelitele


const getSeriesDescription = (seriesName) => {
  switch (seriesName) {
    case "Solo+":
      return "Micro houses with 1 fully functional floor and loft. Suitable for garden houses, AirBnB unit, sauna.";
    case "Duo":
      return "Smaller houses with 1 fully functional floor and bigger loft. Great for starter homes or AirBnB.";
    case "Trio":
      return "Two fully functional floors. Suitable for family homes and year-round use.";
    default:
      return "";
  }
};

const getSeriesImagePath = (seriesName) => {
  const fileName = seriesName.toLowerCase() + '.png';
  //.replace(/\s+/g, '-')
  return import.meta.env.BASE_URL + 'images/' + fileName;
};
const getImagePath = (fileName) => {
  return import.meta.env.BASE_URL + "images/" + fileName;
};

// Price boxi funktsioonid
const totalPrice = computed(() => {
  const basePrice = selectedSeries.value?.subItems?.find(
      (model) => model.name === selectedModel.value
  )?.variables?.price || 0;

  const featurePrice = store.addedFeatures.reduce((sum, feature) => sum + (feature.price || 0), 0);

  return basePrice + featurePrice;
});


const setActiveFloor = (val) => {
  activeFloor.value = val;
};

</script>





<style scoped>
h2 {
  text-align: center;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

/* Container for the whole configurator */
.configurator-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}
/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  margin-top: 35px;
  height: calc(100vh - 140px); /* Järelejäänud nähtav ala */
  overflow: hidden; /* Välista main-content scroll */
  position: relative;
}

/* Step Content */
.step-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.series-card-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}

.series-card {
  width: 280px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  transition: transform 0.3s, border-color 0.3s;
  cursor: pointer;
}

.series-card:hover {
  transform: scale(1.03);
  border-color: #28a745;
}

.series-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}



.model-card-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}

.model-card {
  width: 280px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  transition: transform 0.3s, border-color 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.model-card:hover {
  transform: scale(1.03);
  border-color: #28a745;
}

.model-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.model-info {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.model-info li {
  margin-bottom: 0.5rem;
}

.model-card.selected {
  border-color: #28a745;
  box-shadow: 0 0 15px rgba(40, 167, 69, 0.4);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}


/* Models Row */


.models-container button {
  padding: 10px 15px;
  color: #181818;
  border: 2px solid #ccc;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.models-container button:hover {
  background-color: #f0f0f0;
}

.models-container button.selected {
  background-color: #28a745;
  color: #fff;
  border-color: #166028;
}




/* 3D Canvas */
.model-viewer {
  margin-top: 1.4rem;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  position: relative;
}






/* Price Box Fixed at Bottom Right
.price-box {
  position: fixed;
  bottom: 7vh;
  right: 20px;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}*/
.price-box {
  position: absolute; /* ← vaheta fixed välja */
  right: 20px;
  bottom: 90px; /* ↑ et jääks Toolbarist kõrgemale */
  z-index: 11; /* peab olema suurem kui canvas */
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}



.details-btn {
  margin-top: 10px;
  padding: 0.5rem 1rem;
  border: none;
  background: #28a745;
  color: white;
  cursor: pointer;
}
.toolbar-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  pointer-events: none;
}

.toolbar-overlay .btn {
  pointer-events: auto;
}



</style>
