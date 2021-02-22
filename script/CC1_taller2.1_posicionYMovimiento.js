function setup() {
    createCanvas(400, 400);
    background(250);
    noFill();
    strokeWeight(2);
    stroke(100,200,220);
    // dibuja un circulo azul en la posicion central
    ellipse(200,200,50);
    
  }
  
  let xPosicion = 200; 
  let yPosicion = 300; 
  let cont = 0;
  
  function draw() {
    // Dibuja un circulo verde en la posición central
    stroke(0,250,100);
    ellipse(width/2, height/2,50);
    // Dibuja otro circulo verde en la posición (100,100)
    ellipse(width/2 - 100, height/4, 50);
    // Dibuja otro circulo verde en la posición (200,100)
    ellipse(xPosicion, height/4, 50);
    
    // Dibuja otro circulo verde y cada vez que se repita el codigo suma 1 a la posicion en X del circulo 
    ellipse(xPosicion + cont, yPosicion, 50);
    cont = cont + 1;
  }