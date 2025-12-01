const sidebar = {
    sidebar: document.getElementById("sidebar"),
    actionDropdown: document.getElementById("actionDropdown"),
    brushDropdown: document.getElementById("brushDropdown"),
    shapeDropdown: document.getElementById("shapeDropdown"),
    widthInput: document.getElementById("widthInput"),
    heightInput: document.getElementById("heightInput"),
    radiusInput: document.getElementById("radiusInput"),

    createShape(options = {}) {
        let width = options.width ?? parseFloat(this.widthInput.value);
        let height = options.height ?? parseFloat(this.heightInput.value);
        let radius = options.radius ?? parseFloat(this.radiusInput.value);
        let positionX = options.positionX ?? 0;
        let positionY = options.positionY ?? 0;

        switch(this.shapeDropdown.value) {
            default:
            case "rectangle":
                return Bodies.rectangle(positionX, positionY, width, height);
            case "circle":
                return Bodies.circle(positionX, positionY, radius);
        }
    },

    showSetting(elem) {
        elem.closest(".setting").classList.add("visible");
    },

    resetVisibility() {
        Array.from(this.sidebar.getElementsByClassName("defaultHidden")).forEach(elem => {
            elem.classList.remove("visible");
        });
    },

    rebuild() {
        this.resetVisibility();

        this.showSetting(this.actionDropdown);
        switch(this.actionDropdown.value) {
            case "add":
                this.showSetting(this.brushDropdown);
                this.showSetting(this.shapeDropdown);
                if(this.brushDropdown.value != "click") break;
                if(this.shapeDropdown.value == "circle") this.showSetting(this.radiusInput);
                else {
                    this.showSetting(this.widthInput);
                    this.showSetting(this.heightInput);
                }
                break;
        }
    }
};