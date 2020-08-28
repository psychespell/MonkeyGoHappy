var bananaImage, obstacleImage;
var obstacleGroup, foodGroup;
var Jungle, score;

function preload() {
  backImage = loadImage("lungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  Stone = loadImage("stone.png");
  Banana = loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);
  
  var monkey = createSprite(50, 300);
  monkey.addAnimation(player_running);
  monkey.scale = 0.1;
  
  var score = 0;
  
  var bkground = createSprite(200,200,400,400);
  bkground.addAnimation(backImage);
  
  var ground = createSprite(200,350,400,10);
  groind.visible = false;
  
  var rock = createSprite(400,325);
  rock.addAnimation(Stone);
  rock.scale = 0.25;
  rock.velocityX = -6;
  rock.lifetime = 110;
  obstacleGroup.add(rock);
  
  var banana = createSprite(400,320);
  banana.addAnimation(Banana);
  banana.y = randomNumber(120,200);
  banana.scale = 0.08;
  banana.velocityX = -4;
  banana.lifetime = 110;
  foodGroup.add(banana);
}

function draw() {
  background(220);
  
  if(monkey.isTouching(banana)){
    bananaGroup.destroyEach();
    score++;
    }
  
  switch(score){
    case 10: monkey.scale = 0.12;
    break;
    case 20: monkey.scale = 0.14;
    break;
    case 30: monkey.scale = 0.16;
    break;
    case 40: monkey.scale = 0.18;
    break;
    case 50: monkey.scale = 0.20;
    break;
    default: break;
  }
  
  if(monkey.isTouching(rock)){
     monkey.scale = 0.10;
     }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,500);
}