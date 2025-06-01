<template>
  <div class="customize-panel">
    <div class="floor-buttons">
      <button
          :class="['floor-btn', store.activeFloor === 'floor1' ? 'active' : '']"
          @click="toggleFloor('floor1')">Floor 1</button>
      <button
          :class="['floor-btn', store.activeFloor === 'floor2' ? 'active' : '']"
          @click="toggleFloor('floor2')">Floor 2</button>
      <button
          :class="['floor-btn', store.activeFloor === 'fullHouse' ? 'active' : '']"
          @click="toggleFloor('fullHouse')">Full house view</button>
    </div>

    <div class="accordion-scroll-area">
      <div class="accordion-section">
        <Accordion title="Exterior Door">
          <div class="styled-radio-group">
            <label
                :class="[
                  'styled-radio',
                  store.layoutSelections.fullHouse.exteriorDoor === 'halfGlass' ? 'selected' : ''
                ]"
            >
              <input type="radio" value="halfGlass" v-model="store.layoutSelections.fullHouse.exteriorDoor" />
              Half Glass
            </label>
            <label
                :class="[
                  'styled-radio',
                  store.layoutSelections.fullHouse.exteriorDoor === 'fullGlass' ? 'selected' : ''
                ]"
            >
              <input type="radio" value="fullGlass" v-model="store.layoutSelections.fullHouse.exteriorDoor" />
              Full Glass
            </label>
          </div>
        </Accordion>

        <Accordion title="Exterior Cladding">
          <div class="color-box-grid">
            <div
                class="color-box"
                v-for="option in exteriorOptions"
                :key="option.value"
                :class="{ selected: store.customize.exterior === option.value }"
                @click="store.customize.exterior = option.value"
            >
              <img :src="baseUrl + 'images/customize/' + option.image" />
              <span class="color-label">{{ option.label }}</span>
            </div>
          </div>
        </Accordion>

        <Accordion title="Interior Cladding">
          <div class="color-box-grid">
            <div
                class="color-box"
                v-for="option in interiorOptions"
                :key="option.value"
                :class="{ selected: store.customize.interior === option.value }"
                @click="store.customize.interior = option.value"
            >
              <img :src="baseUrl + 'images/customize/' + option.image" />
              <span class="color-label">{{ option.label }}</span>
            </div>
          </div>
        </Accordion>

        <Accordion title="Roofing">
          <div class="color-box-grid">
            <div
                class="color-box"
                v-for="option in roofingOptions"
                :key="option.value"
                :class="{ selected: store.customize.roofing === option.value }"
                @click="store.customize.roofing = option.value"
            >
              <img :src="baseUrl + 'images/customize/' + option.image" />
              <span class="color-label">{{ option.label }}</span>
            </div>
          </div>
        </Accordion>

        <Accordion title="Terrace">
          <div class="color-box-grid">
            <div
                class="color-box"
                v-for="option in terraceOptions"
                :key="option.value"
                :class="{ selected: store.customize.terrace === option.value }"
                @click="store.customize.terrace = option.value"
            >
              <img :src="baseUrl + 'images/customize/' + option.image" />
              <span class="color-label">{{ option.label }}</span>
            </div>
          </div>
        </Accordion>

      </div>
    </div>
  </div>
</template>

<script setup>
import Accordion from '@/components/Accordion.vue'
import { useConfiguratorStore } from '@/store/configurator'

const baseUrl = import.meta.env.BASE_URL + '';
const store = useConfiguratorStore()

const props = defineProps({
  model: Object
})

import { floorViewComponents } from '@/logic/floorViewComponents.js'

function toggleFloor(floorName) {
  if (!props.model) return;

  const allComponentNames = Object.values(floorViewComponents).flat();
  allComponentNames.forEach(name => {
    const obj = props.model.getObjectByName(name);
    if (obj) obj.visible = true;
  });

  const toHide = floorViewComponents[floorName] || [];
  toHide.forEach(name => {
    const obj = props.model.getObjectByName(name);
    if (obj) obj.visible = false;
  });

  store.activeFloor = floorName;
}


const roofingOptions = [
  { value: "RR33", label: "RR33", image: "roofingRR33.png" },
  { value: "RR11", label: "RR11", image: "roofingRR11.png" },
  { value: "RR21", label: "RR21", image: "roofingRR21.png" },
  { value: "RR22", label: "RR22", image: "roofingRR22.png" },
  { value: "RR23", label: "RR23", image: "roofingRR23.png" },
  { value: "RR2H3", label: "RR2H3", image: "roofingRR2H3.png" },
  { value: "RR29", label: "RR29", image: "roofingRR29.png" },
  { value: "RR32", label: "RR32", image: "roofingRR32.png" },
  { value: "RR750", label: "RR750", image: "roofingRR750.png" },
];

const terraceOptions = [
  { value: "green", label: "Green", image: "terraceGreen.png" },
  { value: "brown", label: "Brown", image: "terraceBrown.png" },
];
const interiorOptions = [
  { value: "natural", label: "Natural", image: "interiorNatural.png" },
  { value: "white", label: "White", image: "interiorWhite.png" },
];
const exteriorOptions = [
  { value: "natural", label: "Natural", image: "exteriorNatural.png" },
  { value: "kivi", label: "Kivi", image: "exteriorKivi.png" },
  { value: "piki", label: "Piki", image: "exteriorPiki.png" },
  { value: "suvi", label: "Suvi", image: "exteriorSuvi.png" },
  { value: "petaja", label: "Petäjä", image: "exteriorPetaja.png" },
  { value: "manty", label: "Mänty", image: "exteriorManty.png" },
  { value: "orava", label: "Orava", image: "exteriorOrava.png" },
  { value: "yo", label: "Yö", image: "exteriorYo.png" },
  { value: "heina", label: "Heinä", image: "exteriorHeina.png" },
];



</script>

<style scoped>
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
.customize-panel {
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
.accordion-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}



.accordion-scroll-area {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
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
.color-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.color-box-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.color-box {
  width: 80px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background: white;
  border: 1px solid rgba(64, 62, 62, 0.81);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.color-box img {
  width: 100%;
  height: 60px;
  object-fit: cover;
}

.color-label {
  font-size: 0.75rem;
  padding: 0.25rem 0;
  text-align: center;
  color: #333;
}

.color-box.selected {
  border: 2px solid #28a745;
  box-shadow: 0 0 6px rgba(40, 167, 69, 0.5);
}

</style>
