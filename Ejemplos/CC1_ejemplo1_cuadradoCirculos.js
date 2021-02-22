function setup() {
    createCanvas(500,500);
    background(255);
    // noFill();
    strokeWeight(2);
    stroke(0);
    fill(0);
    circle(width/8,height/8,50)
    circle(width/8,height*7/8,50)
    circle(width*7/8,height/8,50)
    circle(width*7/8,height*7/8,50)
    
    rectMode(CENTER);
    
    translate(width/2,height/2);
    rotate(PI/4);
    noStroke();
    fill(200,0,100)
    rect(0,0,200);
    
    // fill(0,178,0,105)
    // circle(0,0,100)
  }
  