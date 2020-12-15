
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(450,350,1,80);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
 
}



