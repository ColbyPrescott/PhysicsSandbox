class BasicInput {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
    }

    get isHeld() {
        return this.endTime < this.startTime;
    }
}

class ScreenPosition {
    constructor() {
        this.pageX = 0;
        this.pageY = 0;
        this.worldX = 0;
        this.worldY = 0;
    }

    setPositionFromEvent(e) {
        this.pageX = e.pageX;
        this.pageY = e.pageY;
        const canvasBounds = render.canvas.getBoundingClientRect();
        this.worldX = map(e.pageX, canvasBounds.x, canvasBounds.x + canvasBounds.width, render.bounds.min.x, render.bounds.max.x);
        this.worldY = map(e.pageY, canvasBounds.y, canvasBounds.y + canvasBounds.height, render.bounds.min.y, render.bounds.max.y);
    }
}

class ScreenInput extends BasicInput {
    constructor() {
        super();
        this.currentPosition = new ScreenPosition();
        this.startPosition = new ScreenPosition();
        this.endPosition = new ScreenPosition();
    }
}



const Input = {
    mouse: new ScreenInput(),
    // touches: [],
    keys: {}
};



render.canvas.addEventListener("mousedown", e => {
    Input.mouse.pressTime = Date.now();
    Input.mouse.startPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);
});

render.canvas.addEventListener("mousemove", e => {
    Input.mouse.currentPosition.setPositionFromEvent(e);
});

render.canvas.addEventListener("mouseup", e => {
    Input.mouse.releaseTime = Date.now();
    Input.mouse.endPosition.setPositionFromEvent(e);
    Input.mouse.currentPosition.setPositionFromEvent(e);
});


document.addEventListener("keydown", e => {
    Input.keys[e.key] = Input.keys[e.key] || new BasicInput();
    Input.keys[e.key].pressTime = Date.now();
});

document.addEventListener("keyup", e => {
    if(!Input.keys.hasOwnProperty(e.key)) return;
    Input.keys[e.key].releaseTime = Date.now();
});