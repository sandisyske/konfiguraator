<template>
  <div class="configurator-container">
    <!-- Top Navigation (Steps Aligned Left) -->
    <div class="stepper">
      <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="{ active: index === currentStep, completed: index <= lastCompletedStep }"
          @click="toggleStep(index)"
      >
        <span class="step-number">{{ index + 1 }}</span>
        <span class="step-name">{{ step.name }}</span>
        <span v-if="index < steps.length - 1" class="step-line"></span>
      </div>
    </div>

    <!-- Content Wrapper (Fixed Left Menu + 3D Model) -->
    <div class="content-wrapper">
      <!-- Fixed Sidebar for Submenus -->
      <div class="sidebar" v-if="activeMenu">
        <h3>{{ activeMenu.name }} Options</h3>
        <ul>
          <li
              v-for="(subItem, subIndex) in activeMenu.subItems"
              :key="subIndex"
              @click="toggleSubMenu(subItem)"
              :class="{ selected: selectedConfig[activeMenu.name] === subItem.name }"
          >
            {{ subItem.name }}
          </li>
        </ul>

        <!-- Sub-submenu (Opens Inside Sidebar) -->
        <div class="sub-submenu" v-if="activeSubMenu">
          <h4>{{ activeSubMenu.name }}</h4>
          <ul>
            <li
                v-for="(subSubItem, subSubIndex) in activeSubMenu.subItems"
                :key="subSubIndex"
                @click.stop="selectSubItem(subSubItem)"
                :class="{ selected: selectedConfig[activeSubMenu.name] === subSubItem.name }"
            >
              {{ subSubItem.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Main Content (3D Model) -->
      <div class="main-content">
        <div class="model-viewer">3D Model Placeholder</div>
        <div class="price-box">
          <p>Price: <strong>€21,000</strong></p>
          <button class="details-btn">Show Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useConfiguratorStore } from "../store/configurator";

// Get Configurator Store
const store = useConfiguratorStore();

// State for stepper navigation
const currentStep = ref(null);
const lastCompletedStep = ref(0);
const selectedConfig = ref({});
const activeSubMenu = ref(null);

// Get Steps from Store
const steps = computed(() => store.menuItems);
const activeMenu = computed(() => (currentStep.value !== null ? steps.value[currentStep.value] : null));

// Toggle Step Menu (Opens/Closes Sidebar)
const toggleStep = (index) => {
  currentStep.value = currentStep.value === index ? null : index;
  activeSubMenu.value = null; // Reset submenus
};

// Toggle Submenus (First Level)
const toggleSubMenu = (subItem) => {
  activeSubMenu.value = activeSubMenu.value === subItem ? null : subItem;
};

// Submenu Selection (Highlights Selection)
const selectSubItem = (subSubItem) => {
  selectedConfig.value[activeSubMenu.value.name] = subSubItem.name;
  lastCompletedStep.value = Math.max(lastCompletedStep.value, currentStep.value + 1);
};
</script>

<style scoped>
/* Main Container */
.configurator-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Stepper Navigation (Aligned Left) */
.stepper {
  display: flex;
  align-items: center;
  background: #f8f8f8;
  padding: 15px 0;
  border-bottom: 2px solid #ddd;
  padding-left: 20px; /* Aligns steps to the left */
}
.step {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
}
.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  font-weight: bold;
}
.step-name {
  margin-left: 8px;
  color: gray;
  font-weight: 500;
}
.step-line {
  width: 40px;
  height: 2px;
  background: gray;
  margin-left: 8px;
}
.step.active .step-number {
  background: #4CAF50;
}
.step.active .step-name {
  color: #4CAF50;
}
.step.completed .step-number {
  background: #2a9d8f;
}
.step.completed .step-name {
  color: #2a9d8f;
}

/* Content Wrapper */
.content-wrapper {
  display: flex;
  flex: 1;
  height: 100%;
}

/* Sidebar (Fixed Width for Submenus) */
.sidebar {
  width: 250px;
  background: white;
  padding: 1rem;
  border-right: 2px solid #ddd;
  position: absolute;
  left: 20px;
  top: 13%;
  height: auto;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.sidebar h3 {
  margin-bottom: 10px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}
.sidebar li.selected {
  background: #4CAF50;
  color: white;
}

/* Sub-submenu (Inside Sidebar) */
.sub-submenu {
  background: #f9f9f9;
  margin-top: 30%;
  padding: 50px;
  border-radius: 5px;
}
.sub-submenu h4 {
  margin-bottom: 5px;
}
.sub-submenu ul {
  padding-left: 10px;
}
.sub-submenu li {
  padding: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.sub-submenu li:hover {
  background: #218838;
}

/* Main Content (3D Model) */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - 80px);
}
.model-viewer {
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #555;
}

/* Price Box Fixed at Bottom Right */
.price-box {
  position: fixed;
  bottom: 20px;
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
