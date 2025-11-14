render.canvas.addEventListener("wheel", (e) => {
    e.preventDefault();

    let scaleFactor = 0.9;
    if(e.wheelDeltaY < 0) scaleFactor = 1 / scaleFactor;

    let scaleX = render.bounds.max.x - render.bounds.min.x;
    let scaleY = render.bounds.max.y - render.bounds.min.y;
    let centerX = (render.bounds.max.x + render.bounds.min.x) / 2;
    let centerY = (render.bounds.max.y + render.bounds.min.y) / 2;
    let mouseX = map(e.offsetX, 0, render.canvas.width, render.bounds.min.x, render.bounds.max.x);
    let mouseY = map(e.offsetY, 0, render.canvas.height, render.bounds.min.y, render.bounds.max.y);

    scaleX *= scaleFactor;
    scaleY *= scaleFactor;
    render.bounds.min.x = mouseX - scaleX / 2;
    render.bounds.min.y = mouseY - scaleY / 2;
    render.bounds.max.x = mouseX + scaleX / 2;
    render.bounds.max.y = mouseY + scaleY / 2;
});