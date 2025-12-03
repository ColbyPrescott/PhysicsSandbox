render.canvas.addEventListener("mousedown", e => {
    Input.mouse.startPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    if(sidebar.actionDropdown.value != "remove") return;
    if(sidebar.brushDropdown.value != "click") return;

    const mousePosition = {
        x: Input.mouse.currentPosition.worldX,
        y: Input.mouse.currentPosition.worldY
    };

    let targetBody;
    for(let body of Composite.allBodies(engine.world).reverse())
        if(bodyPointIntersection(body, mousePosition)) targetBody = body;
    if(!targetBody) return;

    Composite.remove(engine.world, targetBody);
});

function tickActionRemove() {
    if(sidebar.actionDropdown.value != "remove") return;
    if(sidebar.brushDropdown.value != "hold") return;

    if(!Input.mouse.isHeld) return;

    const mousePosition = {
        x: Input.mouse.currentPosition.worldX,
        y: Input.mouse.currentPosition.worldY
    };

    for(let body of Composite.allBodies(engine.world).reverse()) {
        if(!bodyPointIntersection(body, mousePosition)) continue;
        Composite.remove(engine.world, body);
    }
}