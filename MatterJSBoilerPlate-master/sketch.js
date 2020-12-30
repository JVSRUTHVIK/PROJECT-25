
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground1;
var box1,box2,box3;
var dustbinObj,dustbinImg;

function preload()
{
dustbinImg=loadImage('images/dustbin.png');	
}

function setup() {
	createCanvas(1250,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1=new Ball(200,450,70);
	ground1=new Ground(width/2,620,width,20);
	box1=new Box(1150,510,20,200);
	box2=new Box(950,510,20,200);
	box3=new Box(1050,600,200,20);

	
	dustbinObj = createSprite(1050,470,20,20);
    dustbinObj.addImage(dustbinImg);
    dustbinObj.scale = 0.88;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
 background(255);
  Engine.update(engine);
  
ball1.display();
ground1.display();
box1.display();
box2.display();
box3.display();
 
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:135,y:-145});
	}}

