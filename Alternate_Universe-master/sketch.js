const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var star,starimg;
var alpha,alphaimg;
var beta,betaimg;
var gamma,gammaimg;
var delta,deltaimg;
var bgimg;

function preload(){
    starimg = loadImage("star.png");
    alphaimg = loadImage("planeta.png");
    betaimg = loadImage("planetb.png");
    betaimg = loadImage("planetc.png");
    deltaimg = loadImage("planetd.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    star = new Star(width/2,height/2,50,50);
    mars = new Planet(500,400,30,"planeta.png");
    earth = new Planet(850,250,40,"planetb.png");   
}

function draw(){
    Engine.update(engine);
    background(0);
     
    star.display();
    if(frameCount<1350){
        mars.display("Mars");
    }
    if(frameCount<2650){
      earth.display("Earth");  
    }
}