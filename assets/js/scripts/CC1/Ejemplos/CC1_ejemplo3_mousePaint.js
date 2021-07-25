  let hueZ, angCuadrado, hue;

  function setup () {
    createCanvas(500, 500).parent("sketch-container");
    background(0);
    colorMode(HSB);
    hueZ = 0;
    angCuadrado = 0;
  }
  
  function draw () {
    // background(0);
    
    if(mouseIsPressed) {
      push();
      rectMode(CENTER);
      strokeWeight(2);
      stroke(200,20,220);
      noFill();
      translate(mouseX,mouseY);
      rotate(angCuadrado);
      rect(0,0,10);
      pop();
      angCuadrado += 0.05;
   }  
     
  }
  
  // Funcion que se ejecuta al presionar algún boton del mouse
  function mousePressed () {
    fill(255);
    noStroke();
    ellipse(mouseX,mouseY,50);
  }
  
  // Funcion que se ejecuta al soltar el mouse
  function mouseReleased () {
    stroke(120,10,255);
    strokeWeight(5);
    point(mouseX,mouseY);
  }
  
  
  function mouseDragged () {
    push();
    noStroke();
    fill(hueZ,360,360);
    ellipse(mouseX,mouseY, 30);
    hueZ += 2;
    if(hueZ > 360) {
      // reinicio de la variable de color al llegar a 360
      hueZ = 0; 
    }
    pop();
    // console.log(hue);
  }