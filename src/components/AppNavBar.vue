<template>
  <div>
    <!-- Render the correct navigation bar -->
    <HomeNavBar v-if="isHomePage" />
    <NavBar v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HomeNavBar from './HomeNavBar.vue';
import NavBar from './NavBar.vue';


const route = useRoute();

// Correctly check if the current route is the homepage
const isHomePage = computed(() => route.path === '/'); // Update dynamically based on the route
</script>