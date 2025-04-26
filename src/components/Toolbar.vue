<template>
  <div class="toolbar">
    <button
        class="toolbar-btn back-btn"
        :disabled="currentStep === 0"
        @click="onPrevious"
    >
      Back
    </button>
    <button
        class="toolbar-btn next-btn"
        @click="onNext"
    >
      {{ isLastStep ? 'Save' : 'Next' }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentStep: Number,
  isLastStep: Boolean,
  onPrevious: Function,
  onNext: Function
});
</script>

<style scoped>
.toolbar {
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: white;
  border-top: 2px solid #ccc;
  z-index: 5;
}
.toolbar-btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.back-btn {
  background: #f5f5f5;
  color: #333;
}
.next-btn {
  background: #28a745;
  color: white;
}
</style>
