import { defineStore } from 'pinia';

export const useConfiguratorStore = defineStore('configurator', {
    state: () => ({
        currentStep: 0,
        selectedSeries: null,
        menuItems: [
            {
                name: "Model",
                subItems: [
                    { name: "Trio series" ,
                    subItems: [
                        { name: "Trio 57" },
                        { name: "Trio 75" },
                        { name: "Trio 100" },
                        { name: "Trio 120" },
                        { name: "Trio 150" },
                        ],
                    },

                    { name: "Duo series" ,
                        subItems: [
                            { name: "Duo 57" },
                            { name: "Duo 75" },
                            { name: "Duo 100" },
                            { name: "Duo 120" },
                        ],
                    },
                    { name: "Solo+ series" ,
                        subItems: [
                            { name: "Solo+ 42" },
                            { name: "Solo+ 75" },
                            { name: "Solo+ 100" },
                        ],
                    },
                ],
            },
            {
                name: "Adding and modifying elements",
                subItems: [
                    { name: "Partitions and indoor doors" },
                    { name: "Front door colors" },
                    { name: "Terrace" },
                    {
                        name: "Dormer",
                        subItems: [
                            { name: "Dormers on the side of the house" },
                            { name: "Covered Entry" },
                            { name: "Gallery*" },
                        ],
                    },
                    {
                        name: "Windows",
                        subItems: [
                            { name: "Add windows" },
                            { name: "Indoors windows" },
                            { name: "Color" },
                        ],
                    },
                    {
                        name: "Doors",
                        subItems: [
                            { name: "Uste lisamine vintskappidele" },
                            { name: "Rõduuksed" },
                            { name: "Välisukse muudatused" },
                            { name: "Värv" },
                        ],
                    },
                ],
            },
            {
                name: "Interior",
                subItems: [{ name: "Stairs and railings" }],
            },
            {
                name: "Exterior",
                subItems: [
                    {
                        name: "Wall color",
                        subItems: [
                            { name: "Soffit and Gable boards" },
                            { name: "Customize" },
                        ],
                    },
                    { name: "Roofing" },
                    { name: "Skylights" },
                    { name: "Terrace color" },
                ],
            },
            {
                name: "Export",
            },
        ],


        selectedConfiguration: {}, // Track currently selected options
    }),
    actions: {
        selectMenuItem(item) {
            console.log("Selected Item: ", item);
            this.selectedConfiguration = { ...this.selectedConfiguration, ...item };
        },
    },
});