<template>
  <nav class="navbar">
    <!-- Left-Aligned Section -->
    <div class="left-section">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/assets/pictures/avrame_logo.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Editable Project Title -->
      <div class="editable-title">
        <span v-if="!editingTitle">{{ projectTitle }}</span>
        <input
            v-if="editingTitle"
            v-model="projectTitle"
            type="text"
            @blur="toggleEditing"
            @keyup.enter="toggleEditing"
        />
        <!-- Modify Button -->
        <img
            src="@/assets/buttons/modify_icon.png"
            alt="Modify Title"
            @click="toggleEditing"
            class="modify-icon"
        />
      </div>
    </div>

    <!-- Right-Aligned Buttons -->
    <div class="right-section">
      <!-- Save Button -->
      <button class="icon-btn">
        <img src="@/assets/buttons/download_icon.png" alt="Save" />
      </button>

      <!-- Help Button -->
      <button class="icon-btn">
        <img src="@/assets/buttons/help_icon.png" alt="Help" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Reactively track the project title and editing state
const projectTitle = ref('My Project');
const editingTitle = ref(false);

const toggleEditing = () => {
  editingTitle.value = !editingTitle.value;
};
</script>

<style scoped>
/* General Navigation Bar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50; /* Green Background */
  padding: 0.8rem 2rem;
  color: white;
  height: 60px;
}

/* Left-Aligned Section Styling */
.left-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Logo Styling */
.logo {
  height: 40px;
  width: auto;
}

/* Editable Title Styling */
@font-face {
  font-family: "ITC Avant Garde Gothic Paneuropean Bold";
  src: url("src/assets/ITC Avant Garde Gothic LT Bold.ttf") format("truetype");
}

.editable-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "ITC Avant Garde Gothic Paneuropean Book", serif;
  font-size: 1.5rem;
}

.editable-title input {
  font-size: 1.2rem;
  padding: 0.3rem;
  border: none;
  border-radius: 5px;
  outline: none;
}

.modify-icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

/* Right-Aligned Section */
.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Button Styling */
.icon-btn {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.icon-btn img {
  height: 30px;
  width: auto;
  cursor: pointer;
}
</style>
