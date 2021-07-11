var rect , rectangle, box1, box2 ,box3 ,box4;

function setup() {
  createCanvas(1200,800);
 rect = createSprite(400, 200, 50, 50);
 rect.shapeColor= "yellow";

 rectangle = createSprite(800,400,50,50);
 rectangle.shapeColor = "yellow";

 box1 = createSprite(600, 300, 50, 50);
 box1.shapeColor = "yellow";

 box2 = createSprite(750, 500, 50, 50); 
 box2.shapeColor = "yellow";

 box3 = createSprite(250, 100, 50, 50);
 box3.shapeColor = "yellow";

 box4 = createSprite(1000, 750, 50, 50);
 box4.shapeColor = "yellow";
}

function draw() {
  background(0);  
  rect.x = World.mouseX;
  rect.y = World.mouseY;

if( isTouching(rect,box4)){
  rect.shapeColor="red";
  box4.shapeColor="red";
  }else
  {rect.shapeColor="yellow";
  box4.shapeColor="yellow";}

  drawSprites();
}


