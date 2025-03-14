<template>
  <div class="configurator-container">
    <!-- Wrapper for config menu and main content -->
    <div class="content-wrapper">
      <!-- Retractable Configuration Menu -->
      <div class="config-menu-wrapper">
        <!-- Edit Button: Stays in place -->
        <button @click="toggleMenu" class="menu-toggle">Edit</button>

        <!-- Sliding Menu -->
        <div class="config-menu" :class="{ open: !menuOpen }">
          <div class="menu-content">
            <ul>
              <!-- Iterate over Main Menu Items -->
              <li
                  v-for="(menu, index) in menuItems"
                  :key="index"
                  @click="toggleSubMenu(menu)"
                  :class="{ active: activeMenu === menu }"
              >
                {{ menu.name }}
                <ul v-if="activeMenu === menu && menu.subItems">
                  <!-- Iterate over Sub Menu Items -->
                  <li
                      v-for="(subItem, subIndex) in menu.subItems"
                      :key="subIndex"
                      @click.stop="toggleSubSubMenu(subItem)"
                  >
                    {{ subItem.name }}
                    <ul v-if="activeSubMenu === subItem && subItem.subItems">
                      <!-- Iterate over Sub Sub Menu Items -->
                      <li
                          v-for="(subSubItem, subSubIndex) in subItem.subItems"
                          :key="subSubIndex"
                          @click.stop="selectItem(subSubItem)"
                      >
                        {{ subSubItem.name }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="main-content">
        <div class="model-viewer">
          3D Model Placeholder

        </div>
        <div class="price-box">
          <p>Price: <strong>€21,000</strong></p>
          <button class="details-btn">Show Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useConfiguratorStore } from '../store/configurator';

// Use the Configurator Pinia Store
const store = useConfiguratorStore();

// State for menu toggling
const menuOpen = ref(false); // Toggles the menu's visibility
const activeMenu = ref(null); // Active top-level menu
const activeSubMenu = ref(null); // Active sub menu

// Retrieve menu items and selected config from the store
const menuItems = store.menuItems;
const selectedConfiguration = store.selectedConfiguration;

// Toggle main menu visibility
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value; // Toggle the menu open/close state
  activeMenu.value = null;
  activeSubMenu.value = null;
};

// Toggle showing sub menus
const toggleSubMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
  activeSubMenu.value = null; // Reset sub menu state
};

// Handle toggling sub sub menus
const toggleSubSubMenu = (subItem) => {
  if (subItem.subItems) {
    activeSubMenu.value = activeSubMenu.value === subItem ? null : subItem;
  } else {
    selectItem(subItem); // Handle selection if no further submenus
  }
};

// Handle selecting 3D model configuration items
const selectItem = (item) => {
  store.selectMenuItem(item); // Dispatch the selection to the store
};
</script>

<style scoped>
/* Set parent .main-content to fill the screen and center content */
.main-content {
  display: flex; /* Enables Flexbox */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  flex: 1; /* Ensures the main-content takes up all available space */
  height: 100vh; /* Occupy full viewport height */
  position: relative; /* Enables children positioning */
  padding: 20px; /* Add padding for spacing around content */
}

/* Style the model-viewer to occupy the entire screen */
.model-viewer {
  display: flex; /* Enables Flexbox for inner alignment if necessary */
  justify-content: center; /* Horizontally center inner content */
  align-items: center; /* Vertically center inner content */
  width: 100%; /* Model viewer spans full width */
  height: calc(100% - 80px); /* Adjust height to leave space for menus or buttons */
  background-color: #f5f5f5; /* Optional: Add light background for better visibility */
  border-radius: 10px; /* Rounded corners for cleaner style */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for better aesthetics */
  overflow: hidden; /* Ensures children stay inside the boundaries */
  text-align: center;
}

/* Style the main configurator container */
.configurator-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20px); /* Subtract padding from full height */
  padding: 10px; /* Add padding for spacing */
  gap: 20px; /* Add consistent spacing between elements */
}

.content-wrapper {
  flex: 1;
  display: flex;
  gap: 20px; /* Creates spacing between menu and content */
}

/* Menu on the left with improved layout and spacing */
.config-menu-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px; /* Set flexible width based on design */
  max-height: calc(100vh - 40px); /* Ensures it doesn't overflow the screen */
  overflow: auto; /* Makes the menu scrollable if content exceeds size */
  border-right: 1px solid #ddd; /* Soft separation from main content */
  background-color: #f8dc50; /* A nicer yellow tone for menu background */
  padding: 10px;
  border-radius: 10px; /* Adds a rounded look */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Visual separation with shadow */
}

/* Styling the "Edit" button */
.menu-toggle {
  position: relative; /* Related to parent container */
  z-index: 10; /* Renders above the menu */
  background-color: #4CAF50; /* Green tone for emphasis */
  color: white;
  padding: 0.7rem 1.2rem;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem; /* Space below button */
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background-color: #45a049; /* Slightly darker green on hover */
  transform: scale(1.05); /* Subtle animation */
}

/* Style the menu items for better visibility */
.config-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.config-menu li {
  padding: 0.75rem 1rem;
  background-color: #ffffff; /* White for button items */
  border: 1px solid #ddd; /* Subtle border for separation */
  border-radius: 5px;
  font-size: 1rem;
  color: #333; /* Standard readable color */
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex; /* Flex layout for future icons */
  justify-content: space-between; /* Space out text and icons */
  align-items: center;
  transition: all 0.3s ease;
}

.config-menu li:hover {
  background-color: #eaeaea; /* Light hover effect */
}

.config-menu li.active {
  background-color: #4CAF50; /* Green active state */
  color: white; /* White text for contrast */
}

/* Submenus */
.config-menu li ul {
  margin-top: 0.5rem;
  padding-left: 1rem; /* Submenu indents */
  border-left: 2px solid #ddd; /* Visual guide for hierarchy */
}

.config-menu li ul li {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f9f9f9; /* Slightly shaded to separate */
  border: 1px solid #ddd;
}

/* Price box fixed in the bottom-right corner */
.price-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* Price text */
.price-box p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Details button inside price box */
.price-box .details-btn {
  background-color: white;
  color: #4CAF50;
  border: 2px solid #4CAF50;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.price-box .details-btn:hover {
  background-color: #45a049;
  color: white;
}

</style>