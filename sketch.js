var background1,backroundimg
var sonic,sonicimg
var invisibleGround
var coin,coinImage
var alien,AlienImage
var gameState="play"



function preload(){
  backgroundimg=loadImage("images/background.png")
  sonicimg=loadAnimation("images/sonic1.png","images/sonic2.png","images/sonic3.png","images/sonic4.png","images/sonic5.png","images/sonic6.png","images/sonic7.png")
  coinImage=loadImage("images/coin1.png")
  AlienImage=loadAnimation("images/alien1.png","images/alien2.png","images/alien3.png")
}

function spawncoin(){
  if(frameCount%150===0){
    coin=createSprite(1200,Math.round(random(450,570)))
    coin.addImage(coinImage)
    coin.velocityX=-4
    coin.scale=0.2
    
    
  }
}



function setup() {
  createCanvas(1500,600);
  background1=createSprite(550, 200, 1500, 700);
  background1.addImage(backgroundimg)
  background1.scale=2.5
  sonic=createSprite(50,480);
  sonic.addAnimation("sonic",sonicimg)
  background1.velocityX=-4
  invisibleGround=createSprite(50,600,4000,100);
  

  
}

function spawnobstacles(){
if (frameCount%200===0){
  alien=createSprite(1200,Math.round(random(350,450)))
  alien.addAnimation("alien",AlienImage)
  alien.velocityX=-4
  alien.scale=0.6
}
}

function draw() {
  background(255,255,255);  
  if (gameState==="play"){

  
  if(background1.x<500){
    background1.x=600
  }
  if(keyDown("space")){
    sonic.velocityY=-8  
    
  }
  sonic.velocityY=sonic.velocityY+1 
sonic.collide(invisibleGround);
  invisibleGround.visible=false;
 if (keyDown(RIGHT_ARROW)){
   sonic.y=sonic.y+5
   invisibleGround.y=invisibleGround.y+5
   
    
  }
  
  if (keyDown(LEFT_ARROW)){
    sonic.y=sonic.y-5
    invisibleGround.y=invisibleGround.y-5
 }

 sonic.y=invisibleGround.y
  spawnobstacles();
  spawncoin();
}
if (gameState==="end"){}
  drawSprites();
}
