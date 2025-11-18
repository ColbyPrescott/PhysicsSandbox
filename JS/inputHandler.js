class BasicInput {
    constructor() {
        this.pressTime = 0;
        this.releaseTime = 0;
    }

    get isHeld() {
        return this.releaseTime < this.pressTime;
    }
}

class ScreenInput extends BasicInput {
    constructor() {
        super()
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



const Input = {
    mouse: new ScreenInput(),
    // touches: [],
    keys: {}
};



render.canvas.addEventListener("mousedown", e => {
    Input.mouse.pressTime = Date.now();
    Input.mouse.setPositionFromEvent(e);
});

render.canvas.addEventListener("mousemove", e => {
    Input.mouse.setPositionFromEvent(e);
});

render.canvas.addEventListener("mouseup", e => {
    Input.mouse.releaseTime = Date.now();
    Input.mouse.setPositionFromEvent(e);
});


document.addEventListener("keydown", e => {
    Input.keys[e.key] = Input.keys[e.key] || new BasicInput();
    Input.keys[e.key].pressTime = Date.now();
});

document.addEventListener("keyup", e => {
    Input.keys[e.key].releaseTime = Date.now();
});