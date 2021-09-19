var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var end = false;
var score = 0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){

  
  createCanvas(400,400);
  // Moving background
  //background is not actually moving- xd
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  //creating boy running
  //wait wha- this is rabbit o-o
  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  

  background(255);
  
  // boy moving on Xaxis with mouse'
  // rabbit boi?- idk-
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  
  fill("white");
  text("score: " +score,5,5,100,100);

  //TOCHING APPLE
  if(apple !== undefined) {
    console.log("apple exists")
    if (rabbit.isTouching(apple)) {
      score = score + 1;
      apple.destroy();
      console.log("RABBIT TOUCH apple");
   }
  }
  else {
    console.log("apple does not exist")
  }
  
  //TOUCHING ORANGE LEAF

  if(redL !== undefined) {
    console.log("redL exists")
    if (rabbit.isTouching(redL)) {
      end = true;
      redL.destroy()
      rabbit.destroy()
      garden.destroy()
      console.log("RABBIT TOUCH orangeL");

   }
  }
  else {
    console.log("redL does not exist")
  }

  if(end == true) {
    textSize(32);
    fill("black");
    text("Bunny got piled in leaves! D:\nyour score is: " +score, 100,100,200,200);
  }


  var select_sprites = Math.round(random(1,3)); 
 
  if (frameCount % 70 == 0 && end == false) {
    if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     } else {
       createRed();
    }
  }



}

function createApples() {
  console.log("create an apple");
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
}



function createOrange() {
  console.log("create an orange leaf");
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

function createRed() {
  console.log("create an red leaf");
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
