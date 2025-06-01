<template>
  <div class="layout-options-wrapper">
    <!-- Floor selection buttons -->
    <div class="floor-buttons">
      <button
          :class="['floor-btn', store.activeFloor === 'floor1' ? 'active' : '']"
          @click="toggleFloor('floor1')"
      >Floor 1</button>
      <button
          :class="['floor-btn', store.activeFloor === 'floor2' ? 'active' : '']"
          @click="toggleFloor('floor2')"
      >Floor 2</button>
      <button
          :class="['floor-btn', store.activeFloor === 'fullHouse' ? 'active' : '']"
          @click="toggleFloor('fullHouse')"
      >Full house view</button>
    </div>


    <!-- Scrollitav akordionite ala -->
    <div class="accordion-scroll-area">
    <!-- Accordion for Floor 1 -->
      <div v-if="store.activeFloor === 'floor1'" class="accordion-section">
        <Accordion title="Interior Walls">
          <div class="styled-radio-group">
            <label
                v-for="option in wallOptions"
                :key="option"
                :class="['styled-radio', store.layoutSelections.floor1.walls === option ? 'selected' : '']"
            >
              <input type="radio" :value="option" v-model="store.layoutSelections.floor1.walls" />
              {{ option.charAt(0).toUpperCase() + option.slice(1) }}
            </label>

          </div>
        </Accordion>

        <!-- Accordion for Dormers -->
        <Accordion title="Dormers">
          <div class="dormer-group" v-for="(value, key) in store.layoutSelections.floor1.dormers" :key="key">
            <label class="dormer-label">{{ formatLabel(key) }}</label>
            <select v-model="store.layoutSelections.floor1.dormers[key]">
              <option :value="null">None</option>
              <option value="standard">Standard</option>
              <option value="extended">Extended</option>
            </select>
          </div>
        </Accordion>
        <!-- Accordion for Skylights -->
        <Accordion title="Skylights">
          <div
              class="toggle-switch-group"
              v-for="(value, key) in store.layoutSelections.floor1.skylights"
              :key="key"
          >
            <label class="switch-toggle-label">
              <span class="label-text">{{ formatLabel(key) }}</span>
              <input
                  type="checkbox"
                  v-model="store.layoutSelections.floor1.skylights[key]"
                  :id="'switch-' + key"
              />
              <span class="switch"></span>
            </label>
          </div>
        </Accordion>


        <!-- Accordion for Side Window Configuration -->
        <Accordion title="Side Window Configuration">
          <div class="styled-radio-group">
            <label
                v-for="option in ['normal', 'angled', 'maximum']"
                :key="option"
                :class="[
                  'styled-radio',
                  store.layoutSelections.floor1.sideWindowConfig === option ? 'selected' : ''
                ]"
            >
              <input
                  type="radio"
                  :value="option"
                  v-model="store.layoutSelections.floor1.sideWindowConfig"
              />
              {{ option.charAt(0).toUpperCase() + option.slice(1) }}
            </label>
          </div>
        </Accordion>

      </div>
      <!-- Floor 2 accordion -->
      <div v-if="store.activeFloor === 'floor2'" class="accordion-section">
        <Accordion title="Skylights">
          <div
              class="toggle-switch-group"
              v-for="(value, key) in store.layoutSelections.floor2.skylights"
              :key="key"
          >
            <label class="switch-toggle-label">
              <span class="label-text">{{ formatLabel(key) }}</span>
              <input
                  type="checkbox"
                  v-model="store.layoutSelections.floor2.skylights[key]"
                  :id="'switch-' + key"
              />
              <span class="switch"></span>
            </label>
          </div>
        </Accordion>
      </div>
      <div v-if="store.activeFloor === 'fullHouse'" class="accordion-section">
        <!-- Exterior Door -->
        <Accordion title="Exterior Door">
          <div class="radio-group">
            <label>
              <input type="radio" value="halfGlass" v-model="store.layoutSelections.fullHouse.exteriorDoor" />
              Half Glass
            </label>
            <label>
              <input type="radio" value="fullGlass" v-model="store.layoutSelections.fullHouse.exteriorDoor" />
              Full Glass
            </label>
          </div>
        </Accordion>

        <!-- Terrace Size -->
        <Accordion title="Terrace">
          <div class="terrace-control">
            <div class="terrace-group">
              <label>North Side</label>
              <select v-model="store.layoutSelections.fullHouse.terraceSize.north">
                <option value="none">None</option>
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>
            <div class="terrace-group">
              <label>South Side</label>
              <select v-model="store.layoutSelections.fullHouse.terraceSize.south">
                <option value="none">None</option>
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'
import { floorViewComponents } from '@/logic/floorViewComponents'
import Accordion from '@/components/Accordion.vue'

const props = defineProps({ model: Object })
const store = useConfiguratorStore()
const wallOptions = ['one bedroom', 'double bedroom', 'extended bedroom']

const allComponentNames = Object.values(floorViewComponents).flat()

function toggleFloor(floorName) {
  if (!props.model) return
  if (store.activeFloor === floorName) return

  allComponentNames.forEach(name => {
    const obj = props.model.getObjectByName(name)
    if (obj) obj.visible = true
  })

  const toHide = floorViewComponents[floorName] || []
  toHide.forEach(name => {
    const obj = props.model.getObjectByName(name)
    if (obj) obj.visible = false
  })

  store.activeFloor = floorName
}
function formatLabel(key) {
  return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, c => c.toUpperCase()) // Capitalize first letter
}

</script>

<style scoped>
.layout-options-wrapper {
  position: absolute;
  top: 70px;
  left: 20px;
  z-index: 20;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: calc(100vh - 220px); /* kogu nähtav kõrgus */
  display: flex;
  flex-direction: column;
}

.floor-buttons {
  padding-top: 0.9rem;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.6rem;
  justify-content: space-between;
}

.floor-btn {
  flex: 1;
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid #28a745;
  background-color: #ffffff;
  color: #0e1b0e;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.floor-btn:hover {
  background-color: #e7f8ec;
}

.floor-btn.active {
  background-color: #28a745;
  color: #fff;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.3);
}


.accordion-scroll-area {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
}
.accordion-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.styled-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.styled-radio {
  position: relative;
  padding-left: 2rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #555;
  user-select: none;
}

.styled-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.styled-radio::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: all 150ms ease-in;
}

.styled-radio.selected {
  color: black;
}

.styled-radio.selected::before {
  background: radial-gradient(0.75em circle at center, #333 50%, transparent 55%);
  border-color: #333;
  box-shadow: 0 0 0 3px rgba(26, 205, 33, 0.1);
}

.toggle-switch-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.switch-toggle-label {
  display: flex;
  padding: 0.2rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  user-select: none;
}

.label-text {
  flex-grow: 1;
}

.switch-toggle-label input[type="checkbox"] {
  display: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.switch::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

input[type="checkbox"]:checked + .switch {
  background-color: #28a745;
}

input[type="checkbox"]:checked + .switch::before {
  transform: translateX(20px);
}



.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.dormer-group select {
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fdfdfd;
  font-size: 0.95rem;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.dormer-group select:focus {
  border-color: rgba(22, 113, 44, 0.6);
  outline: none;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);
}

.dormer-group label {
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
}

.terrace-control {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.terrace-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

</style>
