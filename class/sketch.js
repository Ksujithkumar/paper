var paper,ground
var dustbinObj
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

	paper = new Paper(50,360,20,20)
  ground = new Ground(600,height,1200,20);
  dustbinObj = new dustbin(600,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbinObj.display();
  
    
  drawSprites();
 
}

function keypressed(){
  if (keyCode === UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}

