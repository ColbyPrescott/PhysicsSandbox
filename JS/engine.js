const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

const engine = Engine.create();

const render = Render.create({
    canvas: document.getElementById("mainCanvas"),
    engine: engine
});

const runner = Runner.create();