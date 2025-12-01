render.canvas.addEventListener("mousedown", e => {
    Input.mouse.startPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    let shape = sidebar.createShape();
    Body.setPosition(shape, {
        x: Input.mouse.currentPosition.worldX,
        y: Input.mouse.currentPosition.worldY
    })

    Composite.add(engine.world, shape);
});