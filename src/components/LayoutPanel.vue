<template>
  <div class="layout-panel">
    <h3>Floor Plan View</h3>

    <button
        :class="{ active: activeFloor.value === 'floor1' }"
        @click="toggleFloor('floor1')"
    >Floor 1</button>

    <button
        :class="{ active: activeFloor.value === 'floor2' }"
        @click="toggleFloor('floor2')"
    >Floor 2</button>

    <button
        :class="{ active: activeFloor.value === 'fullHouse' }"
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
  activeFloor: Object,
  setActiveFloor: Function
});

const allComponentNames = [
  ...floorViewComponents.floor1,
  ...floorViewComponents.floor2,
  ...floorViewComponents.fullHouse
];


const toggleFloor = (floorName) => {
  if (!props.model) return;

  // Kui juba see korrus on aktiivne, ära tee midagi
  if (props.activeFloor.value === floorName) {
    console.log(`[Floor Toggle] ${floorName} already active – no action taken.`);
    return;
  }

  // Näita kõik komponendid
  allComponentNames.forEach(name => {
    const obj = props.model.getObjectByName(name);
    if (obj) obj.visible = true;
  });

  // Peida valitud korruse komponendid
  const toHide = floorViewComponents[floorName] || [];
  toHide.forEach(name => {
    const obj = props.model.getObjectByName(name);
    if (obj) obj.visible = false;
  });

  // Aseta aktiivne korrus
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