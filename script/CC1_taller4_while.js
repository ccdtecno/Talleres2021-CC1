let size, posX,posY,r,g, count;

function setup() {
  createCanvas(400, 400);
  background(0);
  size = 5;
  r = 0;
  g = 0;
  count = 0;
  noStroke();
}
 
function draw() {
  r = 0;
  
  while(r < 255){
    posX = random(width);
    posY = random(height/2, random(0,100));
    
    fill(r,0,0);
    ellipse(posX,posY,size);
    r = r+1;
  }
  
  fill(0);
  rect(0,height/2,width,height/2)
  
  g = random(120,220);
  fill(0,g,g,255);
  ellipse(random(width), random(height/2,height), 20);
  

  
//   console.log("Fin");
//   noLoop();
}