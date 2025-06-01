<template>
  <div class="accordion">
    <div class="accordion-header" @click="open = !open">
      <h4>{{ title }}</h4>
      <span>{{ open ? '▲' : '▼' }}</span>
    </div>
    <div v-show="open" class="accordion-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ title: String })
const open = ref(false)
</script>

<style scoped>
.accordion {
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}
.accordion-header {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem 0.01rem 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.accordion-body {
  padding: 0.5rem;
  background: white;
}
</style>
