const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Bounds = Matter.Bounds;
const Composite = Matter.Composite;
const Detector = Matter.Detector;
const Engine = Matter.Engine;
const Events = Matter.Events;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Vertices = Matter.Vertices;

const engine = Engine.create();

const render = Render.create({
    canvas: document.getElementById("mainCanvas"),
    engine: engine,
    options: {
        hasBounds: true,
        showDebug: true
    }
});

const runner = Runner.create();

function bodyPointIntersection(body, point, pointCollisionFilter) {
    pointCollisionFilter ??= {
        category: 0x0001,
        mask: 0xFFFFFFFF,
        group: 0
    };
    
    if(!Bounds.contains(body.bounds, point)) return false;
    if(!Detector.canCollide(body.collisionFilter, pointCollisionFilter)) return false;

    for (let i = body.parts.length > 1 ? 1 : 0; i < body.parts.length; i++) {
        const part = body.parts[i];
        if (Vertices.contains(part.vertices, point))
            return true;
    }

    return false;
}