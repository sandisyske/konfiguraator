// configuratorController.js

export function toggleVisibility(model, objectName, visible = null) {
    const obj = model.getObjectByName(objectName);
    if (!obj) return;

    if (visible === null) {
        obj.visible = !obj.visible;
    } else {
        obj.visible = visible;
    }
}

export function setFloorPlanView(model, activeFloor = 'FLOOR1') {
    model.traverse((child) => {
        if (!child.name) return;

        // Match components that follow your pattern
        const isA = child.name.endsWith('_A');
        const isB = child.name.endsWith('_B');
        const matchesFloor = child.name.startsWith(activeFloor);

        // A-components visible on current floor, rest hidden
        if (matchesFloor && isA) {
            child.visible = true;
        } else if (matchesFloor && isB) {
            child.visible = false;
        } else {
            // Hide everything from other floors
            child.visible = false;
        }
    });
}
