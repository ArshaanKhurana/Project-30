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
  stand1 = new Stand(390,300,280,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,"skyblue");
  //console.log(block1);
  block2 = new Block(330,275,"skyblue");
  block3 = new Block(360,275,"skyblue");
  block4 = new Block(390,275,"skyblue");
  block5 = new Block(420,275,"skyblue");
  block6 = new Block(450,275,"skyblue");
  block7 = new Block(480,275,"skyblue");
  // //level two
  block8 = new Block(330,235,"yellow");
  block9 = new Block(360,235,"yellow");
  block10 = new Block(390,235,"yellow");
  block11 = new Block(420,235,"yellow");
  block12 = new Block(450,235,"yellow");
  //level three
  block13 = new Block(360,195,"red");
  block14 = new Block(390,195,"red");
  block15 = new Block(420,195,"red");
  // //top
   block16 = new Block(390,155,"pink");

  // //set 2 for second stand
  // //level one
  blocks1 = new Block(640,175,"skyblue");
  blocks2 = new Block(670,175,"skyblue");
  blocks3 = new Block(700,175,"skyblue");
  blocks4 = new Block(730,175,"skyblue");
  blocks5 = new Block(760,175,"skyblue");
  //level two
  blocks6 = new Block(670,135,"yellow");
  blocks7 = new Block(700,135,"yellow");
  blocks8 = new Block(730,135,"yellow");
  //top
  blocks9 = new Block(700,95,"pink");

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
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.ball)
  }
}