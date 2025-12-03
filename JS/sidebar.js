const sidebar = {
    sidebar: document.getElementById("sidebar"),
    actionDropdown: document.getElementById("actionDropdown"),
    brushDropdown: document.getElementById("brushDropdown"),
    rateInput: document.getElementById("rateInput"),
    shapeDropdown: document.getElementById("shapeDropdown"),
    widthInput: document.getElementById("widthInput"),
    heightInput: document.getElementById("heightInput"),
    radiusInput: document.getElementById("radiusInput"),
    staticCheckbox: document.getElementById("staticCheckbox"),
    frictionInput: document.getElementById("frictionInput"),

    createShape(options = {}) {
        const width = options.width ?? parseFloat(this.widthInput.value);
        const height = options.height ?? parseFloat(this.heightInput.value);
        const radius = options.radius ?? parseFloat(this.radiusInput.value);
        const positionX = options.positionX ?? 0;
        const positionY = options.positionY ?? 0;

        const bodyOptions = {
            isStatic: options.static ?? this.staticCheckbox.checked,
            friction: options.friction ?? parseFloat(this.frictionInput.value)
        };

        switch(this.shapeDropdown.value) {
            default:
            case "rectangle":
                return Bodies.rectangle(positionX, positionY, width, height, bodyOptions);
            case "circle":
                return Bodies.circle(positionX, positionY, radius, bodyOptions);
        }
    },

    showSetting(elem) {
        elem.closest(".setting").classList.add("visible");
    },

    showDropdownOptions(dropdown, optionValues) {
        this.showSetting(dropdown);
        for(let option of dropdown.options) {
            option.hidden = !optionValues.includes(option.value);
        }
        if(!optionValues.includes(dropdown.value)) dropdown.value = optionValues[0];
    },

    resetVisibility() {
        for(let elem of this.sidebar.getElementsByClassName("defaultHidden")) {
            elem.classList.remove("visible");
        }
    },

    rebuild() {
        this.resetVisibility();

        this.showSetting(this.actionDropdown);
        switch(this.actionDropdown.value) {
            case "add":
                this.showDropdownOptions(this.brushDropdown, ["click", "twoCorners", "hold"]);
                if(this.brushDropdown.value == "hold") 
                    this.showSetting(this.rateInput);
                this.showSetting(this.shapeDropdown);
                if(["click", "hold"].includes(this.brushDropdown.value)) {
                    if(this.shapeDropdown.value == "circle") {
                        this.showSetting(this.radiusInput);
                    } else {
                        this.showSetting(this.widthInput);
                        this.showSetting(this.heightInput);
                    }
                }
                this.showSetting(this.staticCheckbox);
                this.showSetting(this.frictionInput);
                break;

            case "remove":
                this.showDropdownOptions(this.brushDropdown, ["click", "hold"]);
        }
    }
};