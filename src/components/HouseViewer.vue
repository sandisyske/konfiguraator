<script setup>
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const modelUrl = ref('');
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

onMounted(async () => {
  // Fetch the model URL from backend
  const response = await fetch('http://localhost:5000/api/models/1');
  const data = await response.json();
  modelUrl.value = data.model_url;

  // Load model into Three.js scene
  const loader = new GLTFLoader();
  loader.load(modelUrl.value, (gltf) => {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
});
</script>

<template>
  <div id="viewer"></div>
</template>

<style>
#viewer {
  width: 100%;
  height: 500px;
}
</style>
