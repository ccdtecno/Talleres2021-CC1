// Variables globales 
let diametro, x,y,aumento, vel;

function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);
  // diametro inicial de las figuras
  diametro = 30;
  // posicion de la esquina superior izuiqerda de la figura
  xInicial = diametro;
  yInicial = diametro;
  // Variables que sirven para animar las figuras
  size1 = 0;
  size2 = 0;
  aumento = 0.25;
}

function draw() {
  background(220);
  
  // Este for se utiliza para dibujar las figuras a lo largo del eje vertical
  for(let j = 0; j < diametro*11; j+= diametro*2.5){
    
    // Este for se utiliza para dibujar las figuras a lo largo del eje horizontal
    for(let i = 0; i < diametro*11; i += diametro*2.5){
      
      // dibuja un circulo negro pequeño
      fill(0,0,0);
      noStroke();
      ellipse(xInicial + i , yInicial + j, 5) ;   
      // dibuja un circulo rojo
      noFill();
      stroke(255,0,0);
      ellipse(xInicial + i , yInicial + j, diametro*2 + size1) ;      
      // dibuja un cuadrado azul
      stroke(0,120,255);
      rect(xInicial + i, yInicial + j, diametro + size2)
      // aumenta la variable que aumenta el tamaño del circulo rojo
      size1+=aumento;
      
    } 
    // aumenta la variable que aumentael tamaño del cuadrado azul
    size2+=aumento;
  }
  // condicional que cambia la direccion del aumento
  // si la variable de aumento de la figura 2 es mayor a 50 o menor a 0 la variable de aumento cambia de direccion(aumento o disminucion)
  if (size2 > 50 || size2 < 0) {
    aumento *= -1;
  }
}