// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

const frame = {
    tmpPreviousTime: performance.now() - 1000 / 60,
    currentTime: performance.now(),
    deltaTime: 1000 / 60
};

function preFrame() {
    frame.currentTime = performance.now();
    frame.deltaTime = frame.currentTime - frame.tmpPreviousTime;
    frame.tmpPreviousTime = frame.currentTime;

    tickActionAdd();
    tickActionRemove();
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