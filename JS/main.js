// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);


render.canvas.addEventListener("mousedown", (event) => {
    let width = 40;
    let height = 40;
    let rectangle = Bodies.rectangle(Input.mouse.worldX, Input.mouse.worldY, width, height);
    Composite.add(engine.world, rectangle);
});


function frame() {

}

function main() {
    Render.run(render);
    Runner.run(runner, engine);
}

main();
Events.on(runner, "beforeTick", frame);