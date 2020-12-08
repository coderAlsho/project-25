var ground1, dustbin1, paper1;
var dustbin2, dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	back=loadImage("bg.jpg");
	dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(150,620,35);
	dustbin1= new dustbin(900,625,15,400);
	dustbin2= new dustbin(1000,680,200,15);
	dustbin3= new dustbin(1100,625,15,400);
	ground1= new ground(800,692.5,1600,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ground1.display();
 
 imageMode(CENTER);
  image(dustbinImage,790,490,200,200);

 drawSprites();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:210,y:-210});
  }

}
