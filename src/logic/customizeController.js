import { floorViewComponents } from './floorViewComponents.js';

export function setFloorView(model, selectedFloor) {
    const visibleNames = floorViewComponents[selectedFloor] || [];

    // First, hide everything
    model.children.forEach((child) => {
        if (!child.name) return;
        child.visible = false;
    });

    // Then show only allowed components
    visibleNames.forEach((name) => {
        const obj = model.getObjectByName(name);
        if (obj) {
            obj.visible = true;
        } else {
            console.warn(`Component "${name}" not found in model.`);
        }
    });




}



