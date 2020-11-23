var bullet,wall,thickness;
var weight,speed;





function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2); 
  wall.shapeColor="yellow";
  bullet =createSprite(50, 200, 50, 20);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83))
  bullet.velocityX=speed;
  

}

function draw() {
  background("pink"); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if (damage<10){
      wall.shapeColor="green";

    }
    if(damage=0.5*32*223*223/(70*70*70)){
      wall.shapeColor="green";
    }
    if(0.5*32*223*223/(40*40*40)){
      wall.shapeColor="red";
    }
  
}
  
  drawSprites();
}

function hasCollided(bullet,wall){
       bulletRightEdge=bullet.x+bullet.width;
       wallLeftEdge=wall.x;
       if(bulletRightEdge>=wallLeftEdge){
        return true
       }
       return false;
      
}