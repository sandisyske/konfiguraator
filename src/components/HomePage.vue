<template>
  <div>

    <div class="home-container">
      <h2>Welcome to House Configurator</h2>
      <p>Customize your home designs with ease!</p>
      <router-link to="/project" class="start-button">Start New Project</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.start-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #218838;
}
/* Navigation Bar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50; /* Green background */
  padding: 0.8rem 2rem;
  color: #ca5757;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.nav-links li a {
  text-decoration: none;
  color: #4caf50;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #c8e6c9; /* Lighter green on hover */
}

/* Main Content Styles */
.home-container {
  text-align: center;
  margin-top: 2rem;
}

.home-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.home-container p {
  font-size: 1.2rem;
  color: #333;
}
</style>