<template>
  <div id="app" class="app-layout">
    <AppNavBar /> <!-- Conditional navigation bar -->
    <router-view /> <!-- View corresponding to the route -->
  </div>
</template>

<script setup>
import AppNavBar from './components/AppNavBar.vue';
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

</style>
