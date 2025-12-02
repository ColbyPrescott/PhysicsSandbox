function drawDragOverlay() {
    if(!Input.mouse.isHeld) return;
    if(sidebar.brushDropdown.value != "twoCorners") return;

    render.context.save();
    render.context.resetTransform();

    render.context.beginPath();
    render.context.moveTo(Input.mouse.startPosition.canvasX, Input.mouse.startPosition.canvasY);
    render.context.lineTo(Input.mouse.currentPosition.canvasX, Input.mouse.currentPosition.canvasY);

    render.context.strokeStyle = "#bbbbbb";
    render.context.lineWidth = 2;
    render.context.stroke();

    render.context.restore();
}