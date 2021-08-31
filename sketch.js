var track,trackImg
var car,carImg
var tyre,tyreImg
var gameover,gameoverImg
var restart,restartImg
var coin,coinImg
var tyreGroup,coinGroup
var gamestate="play"
var score=0

function preload(){
  trackImg=loadImage("assets/track.jpg")
  carImg=loadImage("assets/Car.png")
  tyreImg=loadImage("assets/Tyre.png")
  gameoverImg=loadImage("assets/gameOver.png")
  restartImg=loadImage("assets/restart.png")
  coinImg=loadImage("assets/Coin.png")

}


 function setup(){
 createCanvas(800,800)
 track=createSprite(400,400,1200,800)
 track.scale=2
 track.addImage(trackImg)
 track.velocityY=10
 car=createSprite(400,650)
 car.addImage(carImg)
 
 tyreGroup = new Group();
 coinGroup = new Group();
 }

 function draw(){
 background(0)
 if(track.y>400){track.y=200}
 if(keyDown("RIGHT_ARROW")){
  car.x=car.x+5
   }
   if(keyDown("LEFT_ARROW")){
   car.x=car.x-5
   }
   spawnCoin()
   spawnObstacle()
   if(coinGroup.isTouching(car)){
     coinGroup.destroyEach()
   }
   if(tyreGroup.isTouching(car)){
   gamestate="end"
   }
   score=score+frameRate()/28
   console.log(frameRate())
   textSize(25)
   fill("yellow")
   drawSprites()
   text("score:"+score,620,40)
   if(gamestate==="end"){
     background("white")
     textSize(50)
     fill("yellow")
     text("Game Over",400,400)
     text("Your Score is:"+score,400,450)
   }

   }

   function spawnCoin(){
   if(frameCount % 100 === 0){
    var coin = createSprite(0,0)
    coin.x=random(80,720)
    coin.y=random(10,750)
    coin.addImage(coinImg)  
    coin.velocityY=5;
    coin.scale=0.1
    coin.lifetime = 200;
    coinGroup.add(coin);
     }
     } 
     function spawnObstacle(){
     if(frameCount % 200 === 0){
      var tyre = createSprite(0,0)
      tyre.x=random(80,720)
      tyre.y=random(10,750)
      tyre.addImage(tyreImg)
      tyre.velocityY=5;
      tyre.scale=0.5
      tyre.lifetime = 200;
      tyreGroup.add(tyre)
    }
  }
