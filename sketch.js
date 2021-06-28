const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  blockA1 = new Block(300,275,30,40);
  blockA2 = new Block(330,275,30,40);
  blockA3 = new Block(360,275,30,40);
  blockA4 = new Block(390,275,30,40);
  blockA5 = new Block(420,275,30,40);
  blockA6 = new Block(450,275,30,40);
  blockA7 = new Block(480,275,30,40);
  
  //level two
  blockB1 = new Block(330,255,30,40);
  blockB2 = new Block(360,255,30,40);
  blockB3 = new Block(390,255,30,40);
  blockB4 = new Block(420,255,30,40);
  blockB5 = new Block(450,255,30,40);

  //level three
  blockC1 = new Block(360,235,30,40);
  blockC2 = new Block(390,235,30,40);
  blockC3 = new Block(420,235,30,40);

  //top
  blockD1 = new Block(390,215,30,40);


  //set 2 for second stand
  //level one
 
  //level two

  //top
 

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blockA1.display();
  blockA2.display();
  blockA3.display();
  blockA4.display();
  blockA5.display();
  blockA6.display();
  blockA7.display();

  fill("lightgreen")

  blockB1.display();
  blockB2.display();
  blockB3.display();
  blockB4.display();
  blockB5.display();

  fill("yellow")

  blockC1.display();
  blockC2.display();
  blockC3.display();

  fill("red")

  blockD1.display();
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged (){
  Matter.Body.setPosition(this.ball,{x: mouseX, y: mouseY})
}

function mouseReleased (){
  slingShot.fly()
}