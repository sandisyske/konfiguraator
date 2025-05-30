<template>
  <div class="layout-panel">
    <h3>Floor Plan View</h3>

    <button
        :class="{ active: activeFloor === 'floor1' }"
        @click="toggleFloor('floor1')"
    >Floor 1</button>

    <button
        :class="{ active: activeFloor === 'floor2' }"
        @click="toggleFloor('floor2')"
    >Floor 2</button>

    <button
        :class="{ active: activeFloor === 'fullHouse' }"
        @click="toggleFloor('fullHouse')"
    >Full House</button>

    <hr />
    <p class="hint">Coming soon: Add/remove walls & windows!</p>
  </div>
</template>

<script setup>
import { floorViewComponents } from '../logic/floorViewComponents.js';

const props = defineProps({
  model: Object,
  activeFloor: String,
  setActiveFloor: Function
});

const allComponentNames = [
  ...floorViewComponents.floor1,
  ...floorViewComponents.floor2,
  ...floorViewComponents.fullHouse
];

let previouslyHidden = [];

const toggleFloor = (floorName) => {
  console.log("[Floor Toggle] clicked:", floorName);
  if (!props.model) return;



  // Untoggle if same floor clicked again
  if (props.activeFloor === floorName) {
    console.log("[Floor Toggle] Untoggled floor:", floorName);
    // Restore visibility
    allComponentNames.forEach(name => {
      const obj = props.model.getObjectByName(name);
      if (obj) obj.visible = true;
    });

    previouslyHidden = [];
    props.setActiveFloor("fullHouse");
    return;
  }

  // Hide selected floor's components
  const toHide = floorViewComponents[floorName] || [];
  const newlyHidden = [];

  console.log("[Floor Toggle] Hiding:", toHide);

  toHide.forEach(name => {
    const obj = props.model.getObjectByName(name);
    if (obj && obj.visible) {
      obj.visible = false;
      newlyHidden.push(name);
    }
  });

  previouslyHidden = newlyHidden;
  props.setActiveFloor(floorName);
};
</script>

<style scoped>
.layout-panel {
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 20;
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

button {
  color: #181818;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #eee;
}

.hint {
  font-size: 0.8rem;
  color: #888;
  margin-top: 1rem;
}

.active {
  background-color: #007acc;
  color: white;
}
</style>