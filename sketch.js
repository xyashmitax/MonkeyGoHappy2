var monkey, monkeymoving;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground, groundImage, invisibleground;
var survivalTime;


function preload(){
  
  monkeymoving = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
  
  groundImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  ground = createSprite (200,200);
  ground.addImage(groundImage);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("run", monkeymoving);
  monkey.scale = 0.2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime = 0;
  score = 0;
  
  invisibleground=createSprite(200,380,500,10);
   
}

function draw() {
  background(220);
  
  ground.x=ground.x/2;
  
  monkey.collide(invisibleground);

  
 if(bananaGroup.isTouching(monkey)){
   score = score + 2;
 }
    if(keyDown("space") && monkey.y>=250){ 
    console.log(monkey.y); 
    monkey.velocityY = -10 
  } 
  monkey.velocityY = monkey.velocityY+0.5
  
  
  switch(score){
      
      case 10: monkey.scale = 0.12;
      break;
      case 20: monkey.scale = 0.14;
      break;
      case 30: monkey.scale = 0.16;
      break;
      case 40: monkey.scale = 0.18;
      break;
    default: break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    player.scale = 0.2
    banana.destroy();
  }
  
  spawnstones()
  spawnbananas()
  drawSprites();
  
    stroke("white");
  textSize(20);
  fill("white");
  text("score = " + score, 100,50);
  
}
function spawnstones() {
  if(frameCount%300===0){
  obstacle = createSprite(500,370,10,10); 
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
  
}
}
function spawnbananas(){
  if(frameCount%80===0){
  banana = createSprite(500,300,10,10);
    banana.y = Math.round(random(120,200));
    //banana.x = -1;
  banana.addImage(bananaImage);
  banana.scale = 0.07;
    banana.lifetime=200;
  
    banana.velocityX = -3
    
    bananaGroup.add(banana)
  
  }
}