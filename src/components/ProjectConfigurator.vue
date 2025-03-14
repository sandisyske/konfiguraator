<template>
  <div class="configurator-container">
    <!-- Top Navigation Bar -->


    <!-- Wrapper for config menu and main content -->
    <div class="content-wrapper">
      <!-- Retractable Configuration Menu -->
      <div class="config-menu" :class="{ 'open': menuOpen }">
        <button @click="toggleMenu" class="menu-toggle">I</button>
        <div class="menu-content">
          <br>
          <ul>
            <li
                v-for="(step, index) in steps"
                :key="index"
                @click="goToStep(index)"
                :class="{ active: currentStepIndex === index }"
            >
              {{ step.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Main Content Area -->
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
import { ref, computed } from 'vue';
import { useConfiguratorStore } from '../store/configurator';
import NavBar from './NavBar.vue'; // Import NavBar Component


const store = useConfiguratorStore();
const projectTitle = ref("My Project");
const menuOpen = ref(false);

const steps = computed(() => store.steps);
const currentStepIndex = computed(() => store.currentStep);
const goToStep = (index) => store.goToStep(index);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
</script>

<style scoped>
.configurator-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Wrapper for Config Menu and Content */
.content-wrapper {
  flex: 1;
  display: flex;
  position: relative; /* For better alignment control */
}

/* Config Menu */
.config-menu {
  position: relative;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background: white;
  border-right: 1px solid #ddd;
  transition: transform 0.3s ease-out; /* Smooth transition for sliding in/out */
  transform: translateX(-250px); /* Hidden by default */
}
.config-menu.open {
  transform: translateX(0); /* Slide in when open */
}
.menu-toggle {
  position: absolute;
  right: -30px;
  top: 20px; /* Adjusted relative to content-wrapper */
  padding: 0.5rem;
  background: #594caf;
  border: none;
  color: white;
  cursor: pointer;
}
.menu-content ul {
  list-style: none;
  padding: 1rem;
}
.menu-content li {
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}
.menu-content li.active {
  font-weight: bold;
  color: #4CAF50;
}

/* Main Content */
.main-content {
  flex: 1; /* Take up the remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto; /* Prevent overflow if content gets large */
}
.model-viewer {
  width: 70%;
  height: 500px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #555;
}
.price-box {
  position: absolute;
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
