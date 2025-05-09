<template>
  <div class="toolbar">
    <button
        v-if="canGoBack"
        class="btn secondary"
        @click="onPrevious"
    >
      Back
    </button>
    <button
        v-if="canGoNext && !isLastStep"
        class="btn primary"
        @click="onNext"
    >
      Next
    </button>
    <button
        v-if="isLastStep"
        class="btn primary"
        @click="onNext"
    >
      Save
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentStep: Number,
  isLastStep: Boolean,
  onPrevious: Function,
  onNext: Function,
  canGoBack: Boolean,
  canGoNext: Boolean
});
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  background: transparent;
  box-shadow: none;
  padding: 0;

  pointer-events: auto; /* ← vajalik, sest parentil on pointer-events: none */
}


/* Basic button style */
.btn {
  padding: 0.6rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 220px; /* kindel laius */
  text-align: center;
}
/* Primary (Next / Save) */
.primary {
  background-color: #28a745;
  color: white;
  border: 2px solid #28a745;
}

.primary:hover {
  background-color: #218838;
  border-color: #218838;
}

/* Secondary (Back) */
.secondary {
  background-color: white;
  color: #333;
  border: 2px solid #ccc;
}

.secondary:hover {
  background-color: #f5f5f5;
  border-color: #aaa;
}
</style>
