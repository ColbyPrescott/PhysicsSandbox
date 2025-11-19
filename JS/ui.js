const dom = {
    actionDropdown: document.getElementById("actionDropdown"),
    brushDropdown: document.getElementById("brushDropdown"),
    shapeDropdown: document.getElementById("shapeDropdown"),

    getShape() {
        switch(dom.shapeDropdown.value) {
            default:
            case "rectangle":
                return Bodies.rectangle(0, 0, 40, 40);
            case "circle":
                return Bodies.circle(0, 0, 40);
        }
    }
};