// Pinia stores for state management

import { defineStore } from "pinia";
import {ref} from "vue";

export const useConfiguratorStore = defineStore("configurator", {
    state: () => ({
        currentStep: 0,
        activeFloor: 'floor1',
        selectedSeries: null,
        selectedModel: null,
        addedFeatures: [],
        menuItems: [
            {
                name: "Select House Model",
                subItems: [
                    {
                        name: "Solo+",
                        subItems: [
                            {
                                name: "Solo+ 42",
                                description: "Minimal compact model ideal for saunas, offices or AirBnB units.",
                                image: "solo+-42.png",
                                variables: {
                                    floorArea: "17.1 m² / 184.0 ft²",
                                    accommodates: "1–2 People",
                                    bedrooms: "loft",
                                    bathrooms: 0,
                                    floors: "1 + compact loft area",
                                    price: 13060
                                }
                            },
                            {
                                name: "Solo+ 75",
                                description: "Larger version with functional layout and light-filled loft.",
                                image: "solo+-75.png",
                                variables: {
                                    floorArea: "33.9 m² / 365.0 ft²",
                                    accommodates: "2–3 People",
                                    bedrooms: "loft",
                                    bathrooms: 1,
                                    floors: "1 + compact loft area",
                                    price: 19525
                                }
                            },
                            {
                                name: "Solo+ 100",
                                description: "Versatile space with added headroom and comfort for 2–4 users.",
                                image: "solo+-100.png",
                                variables: {
                                    floorArea: "38.4 m² / 413.0 ft²",
                                    accommodates: "2–4 People",
                                    bedrooms: "1 + loft",
                                    bathrooms: 1,
                                    floors: "1 + compact loft area",
                                    price: 23210
                                }
                            }
                        ]
                    },
                    {
                        name: "Duo",
                        subItems: [
                            {
                                name: "Duo 57",
                                description: "Compact house with a spacious loft, perfect for starter families.",
                                image: "duo-57.png",
                                variables: {
                                    floorArea: "30.8 m² / 331.0 ft²",
                                    accommodates: "1–2 People",
                                    bedrooms: "loft",
                                    bathrooms: 1,
                                    floors: "1+ loft",
                                    price: 23705
                                }
                            },
                            {
                                name: "Duo 75",
                                description: "Open-plan layout with more space and natural light.",
                                image: "duo-75.png",
                                variables: {
                                    floorArea: "39.8 m² / 428.0 ft²",
                                    accommodates: "1–4 People",
                                    bedrooms: "1 + loft",
                                    bathrooms: 1,
                                    floors: "1+ loft",
                                    price: 27280
                                }
                            },
                            {
                                name: "Duo 100",
                                description: "Ideal for families or groups with flexible space solutions.",
                                image: "duo-100.png",
                                variables: {
                                    floorArea: "54.4 m² / 585.0 ft²",
                                    accommodates: "2–5 People",
                                    bedrooms: "1 + loft",
                                    bathrooms: 1,
                                    floors: "1+ loft",
                                    price: 34565
                                }
                            },
                            {
                                name: "Duo 120",
                                description: "Spacious model for full-time living or year-round use.",
                                image: "duo-120.png",
                                variables: {
                                    floorArea: "67.6 m² / 727.0 ft²",
                                    accommodates: "3–6 People",
                                    bedrooms: "1 + loft",
                                    bathrooms: 1,
                                    floors: "1+ loft",
                                    price: 40655
                                }
                            }
                        ]
                    },

                    {
                        name: "Trio",
                        subItems: [
                            {
                                name: "Trio 57",
                                description: "Entry-level two-floor house kit with efficient use of space.",
                                image: "trio-57.png",
                                variables: {
                                    floorArea: "65.7 m² / 707.1 ft²",
                                    accommodates: "1–4 People",
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    floors: 2,
                                    price: 49600
                                }
                            },
                            {
                                name: "Trio 75",
                                description: "Balanced design with larger interior and modern comfort.",
                                image: "trio-75.png",
                                variables: {
                                    floorArea: "77.6 m² / 835.2 ft²",
                                    accommodates: "1–5 People",
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    floors: 2,
                                    price: 58670
                                }
                            },
                            {
                                name: "Trio 100",
                                description: "Great for families or vacation use with max versatility.",
                                image: "trio-100.png",
                                variables: {
                                    floorArea: "101.9 m² / 1096.8 ft²",
                                    accommodates: "2–6 People",
                                    bedrooms: 3,
                                    bathrooms: 1,
                                    floors: 2,
                                    price: 68280
                                }
                            },
                            {
                                name: "Trio 120",
                                description: "Spacious home with full living area and large windows.",
                                image: "trio-120.png",
                                variables: {
                                    floorArea: "118.7 m² / 1277.6 ft²",
                                    accommodates: "3–7 People",
                                    bedrooms: 3,
                                    bathrooms: 2,
                                    floors: 2,
                                    price: 83340
                                }
                            },
                            {
                                name: "Trio 150",
                                description: "Our most luxurious A-frame kit – ideal for large families.",
                                image: "trio-150.png",
                                variables: {
                                    floorArea: "140.9 m² / 1516.6 ft²",
                                    accommodates: "4–8 People",
                                    bedrooms: 3,
                                    bathrooms: 2,
                                    floors: 2,
                                    price: 97590
                                }
                            }
                        ]
                    },
                ],
            },
            { name: "Layout", subItems: [{ name: "Walls" }, { name: "Windows" }] },
            { name: "Customize", subItems: [{ name: "Wall color" }, { name: "Roofing" }] },
            { name: "Save/Export" },
        ],
        layoutSelections: {
            floor1: {
                walls: 'DOUBLE BEDROOM', // radio
                dormers: {
                    bedroomLeft: null,
                    bedroomRight: null,
                    wcLeft: null,
                    livingRoomLeft: null,
                    livingRoomRight: null
                },
                skylights: {
                    bedroomLeft: false,
                    bedroomRight: false,
                    wcLeft: false,
                    livingRoomLeft: false,
                    livingRoomRight: false
                },
                sideWindowConfig: 'normal' // radio: normal, angled, maximum
            },
            floor2: {
                skylights: {
                    northLeft: false,
                    northRight: false,
                    corridor: false,
                    toilet: false,
                    southLeft: true,
                    southRight: false
                }
            },
            fullHouse: {
                exteriorDoor: 'halfGlass', // radio: halfGlass / fullGlass
                terraceSize: {
                    north: 'none',  // none / short / medium / long
                    south: 'none'
                }

            }
        },
        customize: {
            wallColor: 'natural',
            roofing: 'RR33',
            interiorCladding: 'natural',
            exteriorCladding: 'natural',
            terraceColor: 'green'
        }


    }),


    actions: {
        // Handle step changes
        updateStep(step) {
            this.currentStep = step;
        },

        // Select a series
        selectSeries(series) {
            this.selectedSeries = series;
            //this.selectedModel = null;
        },

        // Select a model
        selectModel(model) {
            this.selectedModel = model ? model.name : null;
        },
        addFeature(feature) {
            this.addedFeatures.push(feature);
        },

        removeFeature(featureName) {
            this.addedFeatures = this.addedFeatures.filter(f => f.name !== featureName);
        },

        clearFeatures() {
            this.addedFeatures = [];
        }

    },
});

