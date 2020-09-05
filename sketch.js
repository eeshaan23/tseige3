const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingshot;
var score;
function preload(){
  getBackground();
}
function setup() {
  createCanvas(800,400);
  ground = new Ground(600,height,1200,20);
block1 = new Box(330, 235, 30, 40)
block2 = new Box(360, 235, 30, 40)
block3 = new Box(390, 235, 30, 40)
block4 = new Box(420, 235, 30, 40)
block5 = new Box(450, 235, 30, 40)
block6 = new Box(360, 195, 30, 40)
block7 = new Box(390, 195, 30, 40)
block8 = new Box(420, 195, 30, 40)
block9 = new Box(390, 155, 30, 40)
score= 0;

 polygon = Bodies.circle(50, 200, 20)
 World.add(world, polygon)

 slingshot = new Slingshot(this.polygon,{x:100, y:200})
}

function draw() {
  background(255,255,255);  

  text("score :"+score, 750,40);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  ground.display();

  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
   

  }
  async function getBackground() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime  = responseJSON.datetime;
    var hour = datetime.slice(11,13);}
}