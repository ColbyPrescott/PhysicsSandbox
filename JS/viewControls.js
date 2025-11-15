render.canvas.addEventListener("wheel", (e) => {
    e.preventDefault();

    let scaleFactor = 0.9;
    if(e.wheelDeltaY < 0) scaleFactor = 1 / scaleFactor;

    // Get current values
    let scaleX = render.bounds.max.x - render.bounds.min.x;
    let scaleY = render.bounds.max.y - render.bounds.min.y;
    let mouseX = map(e.offsetX, 0, render.canvas.width, render.bounds.min.x, render.bounds.max.x);
    let mouseY = map(e.offsetY, 0, render.canvas.height, render.bounds.min.y, render.bounds.max.y);
    let centerX = (render.bounds.min.x + render.bounds.max.x) / 2;
    let centerY = (render.bounds.min.y + render.bounds.max.y) / 2;

    // Transform
    scaleX *= scaleFactor;
    scaleY *= scaleFactor;
    centerX = lerp(centerX, mouseX, 1 - scaleFactor);
    centerY = lerp(centerY, mouseY, 1 - scaleFactor);

    // Apply
    render.bounds.min.x = centerX - scaleX / 2;
    render.bounds.min.y = centerY - scaleY / 2;
    render.bounds.max.x = centerX + scaleX / 2;
    render.bounds.max.y = centerY + scaleY / 2;
});