import { defineStore } from 'pinia';

export const useConfiguratorStore = defineStore('configurator', {
    state: () => ({
        currentStep: 0,
        selectedSeries: null,
        elements: {
            walls: null,
            doors: null,
            windows: null,
            terrace: null,
            dormers: null,
            roofColor: null,
            exteriorColor: null,
        },
    }),
    actions: {
        nextStep() {
            if (this.currentStep < this.steps.length - 1) this.currentStep++;
        },
        prevStep() {
            if (this.currentStep > 0) this.currentStep--;
        },
        goToStep(index) {
            if (index >= 0 && index < this.steps.length) this.currentStep = index;
        },
        setSeries(series) {
            this.selectedSeries = series;
        },
        updateElement(key, value) {
            this.elements[key] = value;
        },
    },
    getters: {
        steps: () => [
            { id: 0, name: "Põhiplaan ja mudel" },
            { id: 1, name: "Trio series" },
            { id: 2, name: "Duo series" },
            { id: 3, name: "Solo+ series" },
            { id: 4, name: "Classic series" },
            { id: 5, name: "Double A-frame series" },
            { id: 6, name: "Trio A-frame Townhouse" },
            { id: 7, name: "Elementide muutmine ja lisamine" },
            { id: 8, name: "Vaheseinad ja siseuksed" },
            { id: 9, name: "Terrass" },
            { id: 10, name: "Vintskapid" },
            { id: 11, name: "Aknad" },
            { id: 12, name: "Uksed" },
            { id: 13, name: "Siseviimistlus" },
            { id: 14, name: "Välisviimistlus" },
            { id: 15, name: "Katuse värv" },
            { id: 16, name: "Katuse aknad" },
            { id: 17, name: "Terrassi värv" },
        ],
    },
});