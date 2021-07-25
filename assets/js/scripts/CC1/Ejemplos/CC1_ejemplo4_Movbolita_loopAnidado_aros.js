  let diametro, x,y,aumento, vel, xInicial, yInicial;
  let size1, size2;

  function setup() {
    createCanvas(600, 600).parent("sketch-container");
    // cnv.parent('main__sketch');
    background(220);
    rectMode(CENTER);
    // diametro inicial de las figuras
    diametro = 30;
    // posicion de la esquina superior izuiqerda de la figura
    xInicial = diametro*2.75;
    yInicial = diametro*2.75;
    // Variables que sirven para animar las figuras
    size1 = 0;
    size2 = 0;
    aumento = 0.075;
  }

  function draw() {
    background(10);
    
    // Este for se utiliza para dibujar las figuras a lo largo del eje vertical
    for(let j = 0; j < diametro*16; j+= diametro*2.5){
      
      // Este for se utiliza para dibujar las figuras a lo largo del eje horizontal
      for(let i = 0; i < diametro*16; i += diametro*2.5){
        
        // dibuja un circulo blanco pequeño
        fill(255);
        noStroke();
        ellipse(xInicial + i , yInicial + j, 10) ;   
        // dibuja un circulo azul
        noFill();
        strokeWeight(3);
        stroke(0,120,255);
        ellipse(xInicial + i , yInicial + j, diametro*2 + size1) ;      
        // dibuja un cuadrado rojo
        stroke(255,0,0);
        strokeWeight(5);
        rect(xInicial + i, yInicial + j, diametro + size2)
        // aumenta la variable que aumenta el tamaño del circulo rojo
        size1+=aumento;
        
      } 
      // aumenta la variable que aumentael tamaño del cuadrado azul
      size2+=aumento;
    }
    // condicional que cambia la direccion del aumento
    // si la variable de aumento de la figura 2 es mayor a 50 o menor a 0 la variable de aumento cambia de direccion(aumento o disminucion)
    if (size2 > 30 || size2 < 0) {
      aumento *= -1;
    }
  }