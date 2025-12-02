// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

function preFrame() {
    
}

function postFrame() {
    drawDragOverlay();
}

function main() {
    Render.run(render);
    Runner.run(runner, engine);

    sidebar.rebuild();
}

main();
Events.on(runner, "beforeTick", preFrame);
Events.on(runner, "afterTick", postFrame);