function setup() {
    createCanvas(600, 400);
    background(240);
    // colorMode(HSB);
    rectMode(CENTER);

    let centerX = width/2;
    let centerY = height/2;
    noStroke();

    fill(0);
    rect(centerX,centerY, 100,200);

    fill(40);
    rect(centerX - 110 ,centerY, 80,160);
    fill(80);
    rect(centerX - 190 ,centerY, 60,120);
    fill(150);
    rect(centerX - 250 ,centerY,40,80);

    fill(40);
    rect(centerX + 110 ,centerY, 80,160);
    fill(80);
    rect(centerX + 190 ,centerY, 60,120);
    fill(150);
    rect(centerX + 250 ,centerY,40,80);



  }

