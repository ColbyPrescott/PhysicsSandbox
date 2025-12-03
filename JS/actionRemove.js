render.canvas.addEventListener("mousedown", e => {
    Input.mouse.startPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    if(sidebar.actionDropdown != "remove") return;
    if(sidebar.brushDropdown != "click") return;

    
});