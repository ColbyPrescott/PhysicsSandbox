const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Events = Matter.Events;

const engine = Engine.create();

const render = Render.create({
    canvas: document.getElementById("mainCanvas"),
    engine: engine,
    options: {
        hasBounds: true
    }
});

const runner = Runner.create();