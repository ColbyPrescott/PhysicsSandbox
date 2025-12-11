render.canvas.addEventListener("wheel", (e) => {
    e.preventDefault();

    let scaleFactor = 1 + 0.001 * Math.abs(e.wheelDeltaY);
    if(e.wheelDeltaY > 0) scaleFactor = 1 / scaleFactor;

    // Get current values
    Input.mouse.currentPosition.setPositionFromEvent(e);
    let scaleX = render.bounds.max.x - render.bounds.min.x;
    let scaleY = render.bounds.max.y - render.bounds.min.y;
    let centerX = (render.bounds.min.x + render.bounds.max.x) / 2;
    let centerY = (render.bounds.min.y + render.bounds.max.y) / 2;

    // Transform
    scaleX *= scaleFactor;
    scaleY *= scaleFactor;
    centerX = lerp(centerX, Input.mouse.currentPosition.worldX, 1 - scaleFactor);
    centerY = lerp(centerY, Input.mouse.currentPosition.worldY, 1 - scaleFactor);

    // Apply
    render.bounds.min.x = centerX - scaleX / 2;
    render.bounds.min.y = centerY - scaleY / 2;
    render.bounds.max.x = centerX + scaleX / 2;
    render.bounds.max.y = centerY + scaleY / 2;
});