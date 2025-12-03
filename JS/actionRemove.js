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
    for(let body of Composite.allBodies(engine.world).toReversed())
        if(bodyPointIntersection(body, mousePosition)) targetBody = body;
    if(!targetBody) return;

    Composite.remove(engine.world, targetBody);
});

render.canvas.addEventListener("mouseup", e => {
    Input.mouse.endPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    if(sidebar.actionDropdown.value != "remove") return;
    if(sidebar.brushDropdown.value != "twoCorners") return;

    const width = Math.abs(Input.mouse.worldDeltaX);
    const height = Math.abs(Input.mouse.worldDeltaY);
    if(width < 1 || height < 1) return;

    const selectionBody = Bodies.rectangle(
        (Input.mouse.endPosition.worldX + Input.mouse.startPosition.worldX) / 2,
        (Input.mouse.endPosition.worldY + Input.mouse.startPosition.worldY) / 2,
        width,
        height
    );

    for(let body of Composite.allBodies(engine.world).toReversed()) {
        if(Collision.collides(body, selectionBody) == null) continue;
        Composite.remove(engine.world, body);
    }
});

function tickActionRemove() {
    if(sidebar.actionDropdown.value != "remove") return;
    if(sidebar.brushDropdown.value != "hold") return;

    if(!Input.mouse.isHeld) return;

    const mousePosition = {
        x: Input.mouse.currentPosition.worldX,
        y: Input.mouse.currentPosition.worldY
    };

    for(let body of Composite.allBodies(engine.world).toReversed()) {
        if(!bodyPointIntersection(body, mousePosition)) continue;
        Composite.remove(engine.world, body);
    }
}