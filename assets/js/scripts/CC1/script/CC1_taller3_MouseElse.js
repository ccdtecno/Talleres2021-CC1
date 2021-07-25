  let ancho = 200;
  let valor = 255;
  function setup() {
    createCanvas(600,600).parent("sketch-container");
    // cnv.parent('main__sketch');
    rectMode(CENTER);
    
  }

  function draw() {
    background(150);
    fill(valor);
    rect(width/2, height/2, ancho/2); 
    
    // boton Push (Solo funciona si es presionado activamente)
    
    // Si la variable 'mouseIsPressed' es verdadera entonces:
    if (mouseIsPressed == true) {
      // Imprime en consola que boton se pulso
      print(mouseButton);  
      // IF ANIDADO
      // si el boton pulsado es el derecho:
      if (mouseButton === RIGHT) {
        // cambia la forma a circulo
        noStroke();
        fill(255,0,0);
        ellipse(width/2,height/2,ancho);
      }
    }

  }

  // boton Toggle (switch ON/OFF)

  // Esta funcion se ejecuta cada que el mouse es clickado sin importar la tecla
  function mouseClicked() {
    // Si el valor actual del color en la figura es 0 (negro), entonces:
    if (valor === 0) {
      // cambia el calor a blanco
      valor = 255;
      
    // Sin embargo, si el valor actual del color NO es 0 (negro), entonces: 
    } else {
      // cambia el color a negro
      valor = 0;
    }
  }