// Pinia stores for state management

import { defineStore } from "pinia";

export const useConfiguratorStore = defineStore("configurator", {
    state: () => ({
        // Current step in the configuration process
        currentStep: 0,

        // Available models (menu hierarchy)
        menuItems: [
            {
                name: "Select House Model",
                subItems: [
                    {
                        name: "Trio series",
                        subItems: [
                            { name: "Trio 57" },
                            { name: "Trio 75" },
                            { name: "Trio 100" },
                            { name: "Trio 120" },
                            { name: "Trio 150" },
                        ],
                    },
                    {
                        name: "Duo series",
                        subItems: [
                            { name: "Duo 57" },
                            { name: "Duo 75" },
                            { name: "Duo 100" },
                            { name: "Duo 120" },
                        ],
                    },
                ],
            },
            {
                name: "Adding and modifying elements",
                subItems: [
                    { name: "Walls" },
                    { name: "Windows" },
                    { name: "Doors" },
                ],
            },
            {
                name: "Interior",
                subItems: [{ name: "Stairs and railings" }],
            },
            {
                name: "Exterior",
                subItems: [{ name: "Wall color" }, { name: "Roofing" }],
            },
            {
                name: "Export",
            },
        ],

        // Currently selected items and configurations
        selectedModel: null, // Selected house model (e.g., "Trio 120")
        selectedConfiguration: {}, // Track all custom changes dynamically (key-value pairs)
    }),

    actions: {
        // Update the current step
        updateStep(step) {
            this.currentStep = step;
        },

        // Set the selected 3D model
        selectModel(model) {
            this.selectedModel = model;
        },

        // Update the configuration dynamically (e.g., adding windows)
        updateConfiguration(key, value) {
            this.selectedConfiguration[key] = value;
        },
    },
});