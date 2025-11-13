// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    canvas: document.getElementById("mainCanvas"),
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

render.canvas.addEventListener("mousedown", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    let width = 40;
    let height = 40;
    let rectangle = Bodies.rectangle(x, y, width, height);
    Composite.add(engine.world, rectangle);
});

let mobile = false;
function onWindowResizeDesktop() {
    document.querySelectorAll(".mobile").forEach(elem => elem.classList.replace("mobile", "desktop"));
    Render.setSize(render, window.innerWidth * 0.7, window.innerHeight);
}

function onWindowResizeMobile() {
    document.querySelectorAll(".desktop").forEach(elem => elem.classList.replace("desktop", "mobile"));
    Render.setSize(render, window.innerWidth, window.innerHeight * 0.6);
}

function onWindowResize() {
    mobile = window.innerWidth < window.innerHeight;
    if(mobile) onWindowResizeMobile();
    else onWindowResizeDesktop();
}
window.addEventListener("resize", onWindowResize);
onWindowResize();