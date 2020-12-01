var bullet, wall;
var speed, weight;
var thickness;

function setup(){
createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,50,50);
bullet.shapeColor=color(255);

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}
function draw(){
background(0,0,0);
bullet.velocityX=speed;

if(wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0;
hasCollided();

}
 
drawSprites();

}

function hasCollided(wall){
    {
        var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    }
    if(damage>10){
        wall.shapeColor=color("red");
    }

    if (damage<10){
        wall.shapeColor=color("green");
    }
}

