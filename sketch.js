var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImg, FoodGroup;
var  obstacle, obstacleImg,obstacleGroup ;
var SurvivalTime ,score;
var ground ,invisibleGround;


function preload(){
  
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png"," sprite_3.png"," sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png",  "sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
  bananaImg = loadImage ("banana.png")
 
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false ;
  
  ground = createSprite (200,380,900,20);
  ground.velocityX = -4 ;
  ground.x = ground.width/2;
  ground.shapeColor = "brown"
  
 // invisibleGround = createSprite(200,390,400,10);
//  invisibleGround.visible = false;
}


function draw() {
 background("cyan");
  
   SurvivalTime= SurvivalTime + Math.round(getFrameRate()/60);
   text("Survival  Time "+ SurvivalTime , 275,50);
   
  
  if (gameState===PLAY){
  if(keyDown("space")&& monkey.y >= 350) {
    monkey.velocityY = -10;
  }
     monkey.velocityY = monkey.velocityY + 0.8;
    if (ground.x<0 ){
      ground.x = ground.width/2 
      }
      // if(obstacle.isTouching(monkey)){
      //  gameState = END;
   //   }
  }
   else if (gameState === END) {
      ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacle.setVelocityXEach(0);
     banana.setVelocityXEach(0);
      obstacle.setLifetimeEach(-1);
    banana.setLifetimeEach(-1);
   }
  
  monkey.collide(ground);
  ground.velocityX = -6;
  
  
      
      
     
   spawnBanana()
   spawnObstacles();
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(400,350,10,40);
    obstacle.addImage(obstacleImg);
   obstacle.velocityX = -4;
  //assign scale and lifetime to the obstacle           
    obstacle.lifetime = 300 ;  
   obstacle.scale=0.2;
    }
 }
   
    function spawnBanana(){
      if(frameCount% 80 === 0 ){
         var banana= createSprite(400,200,20,20);
        banana.addImage(bananaImg);
        banana.velocityX = -4;
        banana.scale=0.12;
         
         }
      
      
      
    }



