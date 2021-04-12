let x, y, yAng;

function setup() {
  createCanvas(400, 400);
  background(220);
  x = 0;
  y = height/2;
  yAng = 0;
}

function draw() {
  background(220);
  
  ellipse(x,y+(100*sin(yAng)),30);
  x += 2;
  
  yAng-=0.2;
}