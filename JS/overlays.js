function drawDragOverlay() {
    if(!Input.mouse.isHeld) return;
    if(sidebar.brushDropdown.value != "twoCorners") return;

    render.context.save();
    render.context.resetTransform();

    render.context.strokeStyle = "#bbbbbb";
    render.context.lineWidth = 2;

    if(sidebar.shapeDropdown.value == "circle") {
        render.context.beginPath();
        render.context.arc(
            Input.mouse.startPosition.canvasX,
            Input.mouse.startPosition.canvasY,
            Math.sqrt(Input.mouse.pageDeltaX * Input.mouse.pageDeltaX + Input.mouse.pageDeltaY * Input.mouse.pageDeltaY),
            0, Math.PI * 2
        );
        render.context.moveTo(Input.mouse.startPosition.canvasX, Input.mouse.startPosition.canvasY);
        render.context.lineTo(Input.mouse.currentPosition.canvasX, Input.mouse.currentPosition.canvasY);
        render.context.stroke();
    } else {
        render.context.strokeRect(
            Input.mouse.startPosition.canvasX,
            Input.mouse.startPosition.canvasY,
            Input.mouse.currentPosition.canvasX - Input.mouse.startPosition.canvasX,
            Input.mouse.currentPosition.canvasY - Input.mouse.startPosition.canvasY
        );
    }

    render.context.restore();
}