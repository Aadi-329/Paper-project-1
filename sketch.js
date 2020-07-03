var ground,ball,l1_db,l2_db,l_3db
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
ground=new Ground(400,680,800,20);
ball=new Ball(200,200,20);
l1_db=new dustbin(650,660,200,10);
l2_db=new dustbin(550,600,10,150)
l_3db=new dustbin(750,600,10,150);

	Engine.run(engine);

}


function draw() {
  background(0);
  ground.display();
  ball.display();
  l1_db.display();
  l2_db.display();
  l_3db.display();
 fill("yellow")
  drawSprites();
  keypressed();
}

function keypressed(){
if(keyDown(UP_ARROW)){

Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-5})}

}

