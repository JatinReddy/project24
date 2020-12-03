
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	
	ground1 = new Ground(400,690,800,20);
	paper = new Paper(100,350,40);
	log1 = new Bin(650,670,200,20);
	log2 = new Bin(540,630,20,100);
	log3 = new Bin(750,630,20,100);

	Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground1.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-45});
}



