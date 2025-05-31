<template>
  <div class="layout-options-wrapper">
    <!-- Floor selection buttons -->
    <div class="floor-buttons">
      <button
          :class="['floor-btn', store.activeFloor === 'floor1' ? 'active' : '']"
          @click="toggleFloor('floor1')"
      >
        Floor 1
      </button>
      <button
          :class="['floor-btn', store.activeFloor === 'floor2' ? 'active' : '']"
          @click="toggleFloor('floor2')"
      >
        Floor 2
      </button>
      <button
          :class="['floor-btn', store.activeFloor === 'fullHouse' ? 'active' : '']"
          @click="toggleFloor('fullHouse')"
      >
        Full house view
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useConfiguratorStore } from '@/store/configurator'
import { floorViewComponents } from '@/logic/floorViewComponents'

const props = defineProps({
  model: Object
})

const store = useConfiguratorStore()

const allComponentNames = Object.values(floorViewComponents).flat()

function toggleFloor(floorName) {
  if (!props.model) return

  if (store.activeFloor === floorName) {
    console.log(`[Floor Toggle] ${floorName} already active – no action taken.`)
    return
  }

  // Show all components
  allComponentNames.forEach(name => {
    const obj = props.model.getObjectByName(name)
    if (obj) obj.visible = true
  })

  // Hide components defined for selected floor
  const toHide = floorViewComponents[floorName] || []
  toHide.forEach(name => {
    const obj = props.model.getObjectByName(name)
    if (obj) obj.visible = false
  })

  store.activeFloor = floorName
  console.log(`[Floor Toggle] View switched to ${floorName}`)
}

</script>

<style scoped>
.layout-options-wrapper {
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

.floor-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.floor-btn {
  color: #181818;
  border: 2px solid green;
  background-color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}

.floor-btn.active {
  background-color: green;
  color: white;
}

.floor-btn:hover {
  background-color: #eee;
}
</style>