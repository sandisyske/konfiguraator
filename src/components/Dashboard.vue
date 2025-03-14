<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const message = ref('');

onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      message.value = "Please login first!";
      return;
    }
    const response = await axios.get('http://localhost:5000/api/dashboard', {
      headers: { Authorization: `Bearer ${token}` },
    });
    message.value = response.data.message;
  } catch (error) {
    message.value = "Error loading dashboard";
  }
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ message }}</p>
  </div>
</template>
