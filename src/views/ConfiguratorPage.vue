<template>
  <div class="configurator-container">

    <!-- Stepper Navigation -->
    <!-- Stepper -->
    <StepperComponent
        :steps="steps"
        :current-step="currentStep"
        :last-completed-step="lastCompletedStep"
        :on-toggle-step="toggleStep"
    />


    <div class="main-content">
      <!-- Step 1: Series and Model Selection -->
      <div v-if="currentStep === 0" class="step-content">
        <h2>Select Your House Series</h2>

        <!-- Show series selection -->
        <div v-if="!selectedSeries" class="series-buttons-row">
          <div
              v-for="series in seriesItems"
              :key="series.name"
              class="series-box"
              @click="selectSeries(series)"
          >
            <h3>{{ series.name }}</h3>
          </div>
        </div>

        <!-- Show the models of the selected series -->
        <div v-else class="models-row">
          <h3>Available Models in {{ selectedSeries.name }}</h3>
          <div class="models-container">
            <button
                v-for="model in selectedSeries.subItems"
                :key="model.name"
                :class="{ selected: selectedModel === model.name }"
                @click="selectModel(model)"
            >
              {{ model.name }}
            </button>
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 1" class="step-content">
        <div ref="viewer" class="model-viewer"></div>
      </div>


      <div v-else class="step-content">
        <p>Placeholder content for {{ steps[currentStep].name }}</p>
      </div>

      <!-- Price Box (fixed bottom right corner) -->
      <div class="price-box">
        <p>Price: <strong>€21,000</strong></p>
        <button class="details-btn">Show Details</button>
      </div>
    </div>


    <!-- Toolbar (fixed bottom) -->
    <ToolbarComponent
        :current-step="currentStep"
        :is-last-step="isLastStep"
        :on-previous="goToPreviousStep"
        :on-next="proceedToNextStep"
    />
  </div>
</template>




<script setup>
import { onMounted, ref, watch } from "vue";
import { computed } from "vue";
import { useConfiguratorStore } from "@/store/configurator.js";
import StepperComponent from '@/components/Stepper.vue';
import ToolbarComponent from '@/components/Toolbar.vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Access the store from Pinia
const store = useConfiguratorStore();

// Computed
const steps = computed(() => store.menuItems);
const currentStep = computed(() => store.currentStep);
const lastCompletedStep = computed(() => store.lastCompletedStep);
const selectedSeries = computed(() => store.selectedSeries);
const selectedModel = computed(() => store.selectedModel);
const seriesItems = computed(() => store.menuItems[0]?.subItems || []);
const isLastStep = computed(() => currentStep.value === store.menuItems.length - 1);

// Actions
const toggleStep = (index) => store.updateStep(index);
const goToPreviousStep = () => {
  if (store.currentStep > 0) store.updateStep(store.currentStep - 1);
};
const proceedToNextStep = () => {
  if (!isLastStep.value) {
    store.updateStep(currentStep.value + 1);
  } else {
    console.log("Save configuration:", store.selectedSeries, store.selectedModel);
  }
};
// Actions for series and model selection
const selectSeries = (series) => store.selectSeries(series);
const selectModel = (model) => store.selectModel(model);


// Three.js variables
const viewer = ref(null); // Reference to the viewer container
let scene, camera, renderer, model, animationFrameId;

const initThreeJs = () => {
  const container = viewer.value;
  if (!container) return;

  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  const aspectRatio = container.clientWidth / container.clientHeight;
  camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(4, 5, 11);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Ground
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x999999, side: THREE.DoubleSide });

  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  scene.add(groundMesh);

  // Load the model
  const loader = new GLTFLoader();
  loader.load(

      import.meta.env.BASE_URL + 'models/TRIO150/model.glb',
      (gltf) => {
        model = gltf.scene;

        // Create a group for proper center rotation
        const pivot = new THREE.Group();
        scene.add(pivot);

        // Add model to the pivot group
        pivot.add(model);

        // Scale the model up (e.g., 2x its current size)
        const scaleFactor = 0.5; // Adjust this value based on your needs
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Center the model on the plane
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Adjust the model's position within the pivot group
        model.position.set(-center.x, -box.min.y, -center.z);

        // Rotation will now occur around the pivot group center
        console.log("Model scaled and centered for rotation:", model.scale, model.position);

        // Add animation to rotate the pivot (not the model directly)
        const customAnimate = () => {
          requestAnimationFrame(customAnimate);
          pivot.rotation.y += 0.005; // Adjust the rotation speed as necessary
          renderer.render(scene, camera);
        };

        customAnimate();

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

  renderer.render(scene, camera);
};

// Watcher: Initialize Three.js when entering step 2
import { nextTick } from 'vue'

watch(currentStep, async (newStep) => {
  if (newStep === 1) {
    await nextTick();

    const container = viewer.value;
    if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
      initThreeJs();
    } else {
      console.warn('Viewer not ready yet. Retrying...');
      setTimeout(() => {
        if (viewer.value) initThreeJs();
      }, 100); // oota 100ms ja proovi uuesti
    }
  }
});


// Ensure Three.js is initialized on step 2 if component is mounted directly
onMounted(() => {
  if (currentStep.value === 1) {
    initThreeJs();
  }
});

</script>





<style scoped>
h2 {
  text-align: center;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Välista kogu lehe scroll */
}

/* Container for the whole configurator */
.configurator-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  margin-top: 50px;
  margin-bottom: 40px;
  height: calc(100vh - 140px - 100px); /* Järelejäänud nähtav ala */
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

/* Series Buttons Row */
.series-buttons-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Space between buttons */
  justify-content: center;
}

.series-box {
  width: 50vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.series-box:hover {
  background-color: #e6e6e6;
}

.series-box.selected {
  background-color: #28a745;
  color: green;
  border-color: #166028;
}

/* Models Row */
.models-row {
  margin-top: 20px;
  text-align: center;
}

.models-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between buttons */
  justify-content: center;
  margin-top: 10px;
}

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
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  position: relative;
}






/* Price Box Fixed at Bottom Right */
.price-box {
  position: fixed;
  bottom: 7vh;
  right: 20px;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.details-btn {
  margin-top: 10px;
  padding: 0.5rem 1rem;
  border: none;
  background: #28a745;
  color: white;
  cursor: pointer;
}

</style>
