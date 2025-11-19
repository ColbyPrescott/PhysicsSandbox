render.canvas.addEventListener("mousedown", e => {
    Input.mouse.setPositionFromEvent(e);

    let shape = dom.getShape();
    shape.position = {
        x: Input.mouse.worldX,
        y: Input.mouse.worldY
    };

    Composite.add(engine.world, shape);
});