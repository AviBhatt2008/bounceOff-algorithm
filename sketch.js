var fixedRect, movingRect;
var gameObj1, gameObj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObj1 = createSprite(200, 300, 10, 10);
  gameObj2 = createSprite(800, 300, 10, 10);
  gameObj1.velocityX = 3;
  gameObj2.velocityX = -3;
}

function draw() {
  background(0,0,0);  

  
  bounceOff(gameObj1, gameObj2);
  bounceOff(movingRect, fixedRect);

  drawSprites();
}

