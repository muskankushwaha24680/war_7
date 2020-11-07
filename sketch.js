var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor = color(80,80,80)

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);

   speed = random(223,321);
   weight = random(400,1300);
   thickness = random(30,52);
}

function draw() {
  background(0,0,0);  



   bullet.velocityX = speed;

   bullet.debug = true;


   if(hascollided(bullet,wall)){
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor = color(225,0,0);
     }

     if(damage<10){
       wall.shapeColor = color(0,225,0);
     }
   }

  drawSprites();
}

function hascollided(lBullet,lWall){

  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }

  return false;

}