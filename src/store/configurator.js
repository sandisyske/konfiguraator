// Pinia stores for state management

import { defineStore } from "pinia";

export const useConfiguratorStore = defineStore("configurator", {
    state: () => ({
        currentStep: 0,
        menuItems: [
            {
                name: "Select House Model",
                subItems: [
                    {
                        name: "Solo+ series",
                        subItems: [
                            { name: "Solo+ 42" },
                            { name: "Solo+ 75" },
                            { name: "Solo+ 100" },
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
                ],
            },
            { name: "Layout", subItems: [{ name: "Walls" }, { name: "Windows" }] },
            { name: "Customize", subItems: [{ name: "Wall color" }, { name: "Roofing" }] },
            { name: "Save/Export" },
        ],
        selectedSeries: null,
        selectedModel: null,
    }),


    actions: {
        // Handle step changes
        updateStep(step) {
            this.currentStep = step;
        },

        // Select a series
        selectSeries(series) {
            this.selectedSeries = series;
        },

        // Select a model
        selectModel(model) {
            this.selectedModel = model.name;
        },
    },
});
