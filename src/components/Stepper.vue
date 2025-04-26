<template>
  <div class="stepper">
    <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :class="{ active: index === currentStep, completed: index <= lastCompletedStep }"
        @click="() => onToggleStep(index)"
    >
      <span class="step-number">{{ index + 1 }}</span>
      <span class="step-name">{{ step.name }}</span>
      <span v-if="index < steps.length - 1" class="step-line"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: Array,
  currentStep: Number,
  lastCompletedStep: Number,
  onToggleStep: Function
});
</script>

<style scoped>
.stepper {
  display: flex;
  align-items: center;
  background: #f8f8f8;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
  position: fixed;
  width: 100%;
  z-index: 5;
}
.step {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
}
.step-number {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  font-weight: bold;
}
.step-name {
  color: gray;
  font-weight: 500;
}
.step-line {
  width: 40px;
  height: 2px;
  background: gray;
  margin-left: 8px;
}
.step.active .step-number {
  background: #4CAF50;
}
.step.completed .step-number {
  background: #2a9d8f;
}
.step-line {
  width: 40px;
  height: 2px;
  background: gray;
  margin-left: 8px;
}
</style>
