render.canvas.addEventListener("mousedown", e => {
    Input.mouse.startPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    if(sidebar.brushDropdown.value != "click") return;

    let shape = sidebar.createShape({
        positionX: Input.mouse.currentPosition.worldX,
        positionY: Input.mouse.currentPosition.worldY
    });

    Composite.add(engine.world, shape);
});

render.canvas.addEventListener("mouseup", e => {
    Input.mouse.endPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);

    if(sidebar.brushDropdown.value != "twoCorners") return;

    let width = Math.abs(Input.mouse.worldDeltaX);
    let height = Math.abs(Input.mouse.worldDeltaY);
    if(width < 1 || height < 1) return;
    let shape;

    if(sidebar.shapeDropdown.value == "circle") {
        shape = sidebar.createShape({
            positionX: Input.mouse.startPosition.worldX,
            positionY: Input.mouse.startPosition.worldY,
            radius: Math.sqrt(width * width + height * height)
        });
    } else {
        shape = sidebar.createShape({
            positionX: (Input.mouse.endPosition.worldX + Input.mouse.startPosition.worldX) / 2,
            positionY: (Input.mouse.endPosition.worldY + Input.mouse.startPosition.worldY) / 2,
            width: width,
            height: height
        });
    }

    Composite.add(engine.world, shape);
});

function tickActionAdd() {
    if(sidebar.brushDropdown.value != "hold") return;
    if(!Input.mouse.isHeld) return;
    if(sidebar.rateInput.value <= 0) return;

    let ratePerMillisecond = sidebar.rateInput.value / 1000;
    let delayMilliseconds = 1 / ratePerMillisecond;
    let numShapes = Math.floor(frame.deltaTime / delayMilliseconds);
    if((frame.currentTime - Input.mouse.startTime) % delayMilliseconds < frame.deltaTime % delayMilliseconds) numShapes++;

    for(let i = 0; i < numShapes; i++) {
        let shape = sidebar.createShape({
            positionX: Input.mouse.currentPosition.worldX,
            positionY: Input.mouse.currentPosition.worldY
        });
    
        Composite.add(engine.world, shape);
    }
}