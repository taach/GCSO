var car;
var wall;
var weight; 
var speed;
function setup() {

  createCanvas(1600,400);
 car= createSprite(50,200,50,50);
 wall= createSprite(1000,200,60,height/2);
 wall.shapeColor=color(80,80,80);
  weight= random(55,90);
  speed= random(400,1500);
  car.velocityX= speed;




}

function draw() {
  background(0,0,0);  
  if (wall.x-car.x< (car.width+wall.width)/2) 
  {
    console.log("yes");
    car.velocityX=0;
    var deformation= 0.5 *weight  *speed  *speed/22509;
    if(deformation>180)
    {
     car.shapeColor=color(255,0,0);
      
    }
if(deformation<180 && deformation>100)
 {
car.shapeColor=color(230,230,0);

}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}
  }
  drawSprites();
}