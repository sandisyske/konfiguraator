<template>
  <div id="app">
    <AppNavBar /> <!-- Conditional navigation bar -->
    <router-view /> <!-- View corresponding to the route -->
  </div>
</template>

<script setup>
import AppNavBar from './components/AppNavBar.vue';
</script>
