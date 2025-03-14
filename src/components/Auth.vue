<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const username = ref('');
const isLogin = ref(true);
const token = ref(localStorage.getItem('token'));

async function authenticate() {
  try {
    if (!isLogin.value) {
      if (!username.value || !email.value || !password.value) {
        alert('Please fill out all fields');
        return;
      }
    }

    let response;
    if (isLogin.value) {
      response = await axios.post('http://localhost:5000/api/login', { email: email.value, password: password.value });
    } else {
      console.log('Sending registration data:', { username: username.value, email: email.value, password: password.value });
      response = await axios.post('http://localhost:5000/api/register', { username: username.value, email: email.value, password: password.value });
      console.log('Registration response:', response.data);
      alert('User registered! Now login.');
      isLogin.value = true;
      return;
    }

    localStorage.setItem('token', response.data.token);
    token.value = response.data.token;
  } catch (error) {
    console.error('Frontend Error:', error.response || error.message);
    alert('Error: ' + (error.response?.data.error || error.message));
  }
}


function logout() {
  localStorage.removeItem('token');
  token.value = null;
}
</script>

<template>
  <div class="auth-container">
    <h1>{{ isLogin ? "Login" : "Register" }}</h1>
    <div v-if="!isLogin">
      <input v-model="username" placeholder="Username" />
    </div>
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="authenticate">{{ isLogin ? "Login" : "Register" }}</button>
    <p @click="isLogin = !isLogin">
      {{ isLogin ? "Create an account" : "Already have an account? Login" }}
    </p>
    <button v-if="token" @click="logout">Logout</button>
  </div>
</template>

<style>
.auth-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
