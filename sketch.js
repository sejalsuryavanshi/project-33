const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var backgroundImg;
var bg;
var sister, sisterImg;
var brotherImg, brother;
var SnowFlakesImg, SnowFlakesGroup;

function preload(){
  backgroundImg=loadImage("snow1.jpg")
  sisterImg=loadImage("snow girl.png")
  brotherImg=loadImage("snowBoy.png")
  SnowFlakesImg=loadImage("snow4.webp")
}
function setup() {
  createCanvas(1600,750);
  engine = Engine.create();
  world = Engine.world;
   
  bg=createSprite(600, 445,0,1600);
  bg.addImage(backgroundImg);
  bg.scale=2.8

  sister=createSprite(350,500 );
  sister.addImage(sisterImg);
  sister.scale=1

  brother=createSprite(1220,500 );
  brother.addImage(brotherImg);
  brother.scale=1

 
}

function draw() {
 background("black");

  Engine.update(engine);

if(keyCode===32){
  brother.velocityX=-4
}

if(brother.isTouching(sister)){
  brother.velocityX=0;
}

getSnowFlakes();

  drawSprites();

  textSize(30)
  fill("black")
  text("Press Space to do skiing",500,100)
}

function getSnowFlakes(){

  if(frameCount%60===0){

    var snowFlakes=createSprite(700,50,10,10);
    snowFlakes.x=Math.round(random(80,1300));
    snowFlakes.addImage(SnowFlakesImg);
    snowFlakes.velocityY=4;
    snowFlakes.scale=0.2
    SnowFlakesGroup=createGroup();

    SnowFlakesGroup.add(snowFlakes)
  }
}