
var monkey , monkey_running;
var banana ,obstacle;
var ground, grass;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  monkey_running =                      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(700, 400);
  monkey = createSprite(100, 300, 10, 10)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300, 477, 800, 300);
  ground.shapeColor="#755138"
  
  grass = createSprite(300, 332, 800, 10);
  grass.shapeColor = "#659c5f"
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
  background("#71d1c1");
  
  if(monkey.isTouching(grass)){
    monkey.velocityY = 0;
    monkey.y = 300;
  } else {
    monkey.velocityY = monkey.velocityY + 0.5;
    if(keyDown("DOWN_ARROW")){
      monkey.velocityY = monkey.velocityY + 1;
    }
  }
  
  if(keyWentDown("SPACE") &&
    monkey.isTouching(grass)){
    monkey.velocityY = -12;
  }
  
  if(frameCount % 80 == 0){
    spawnBanana()
  }
  if(frameCount % 300 == 0){
    spawnObstacle()
  }
  
  score = Math.round(frameCount / 10); 
  
  drawSprites();
  
  textSize = 50;
  text("Survival Time: " + score, 20, 20);
}

function spawnBanana(){
  banana = createSprite(725, random(140, 300) , 10, 10);
  banana.addImage('banana', bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 80;
  banana.velocityX = -10;
  foodGroup.add(banana);
}

function spawnObstacle(){
  obstacle = createSprite(725, 307 , 10, 10);
  obstacle.addImage('obstacle', obstacleImage);
  obstacle.scale = 0.2;
  obstacle.lifetime = 80;
  obstacle.velocityX = -10;
  obstacleGroup.add(obstacle);
}






