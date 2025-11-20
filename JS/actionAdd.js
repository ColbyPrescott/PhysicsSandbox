render.canvas.addEventListener("mousedown", e => {
    Input.mouse.setPositionFromEvent(e);

    let shape = dom.createShape();
    Body.setPosition(shape, {
        x: Input.mouse.worldX,
        y: Input.mouse.worldY
    })

    Composite.add(engine.world, shape);
});