// Funcion básica para configurar el entorno
function setup() {
  
  // Configuracion de la mesa de trabajo(alto, ancho)
  createCanvas(400, 400)
  
  // color de fondo
  background(180,0,200);
  // Referencia de los rectangulos
  // rectMode(CENTER);
  // Referencia de los elipses
  // ellipseMode(CORNER);
  
  // ancho de punto
  strokeWeight(10);
  // color de punto
  stroke(0,125,200);
  
  // punto(horizontal, vertical)
  point(10,10);
  
  // color de línea
  stroke(180,0,0);
  // ancho de línea
  strokeWeight(2);
  // línea(xInicial, yInicial, xFinal, yFinal)
  line(50,100,200,200);
  
  // color 
  stroke(0,120,0);
  //Rectangulo(xRef,yRef,ancho,alto)
  rect(100,100,25,100);
  
  // cuadrado(xRef, yRef, lado)
  rect(200,200,100);
  square(50,50,25)
  
  // ancho de puntos
  strokeWeight(5);
  point(100,100);
  point(200,200);
  
  // colorCirculos
  stroke(120,0, 50);
  // ancho de circulos
  strokeWeight(2);
  // elipse(xRef,yRef,ancho,alto)
  ellipse(200,50,150,50);
  
  // circulo(xRef,yRef, diametro)
  ellipse(50,200,50);
  circle(300,300,100);
  
  // ancho de puntos
  strokeWeight(5);
  point(50,200);
  point(200,50);
  
//   Otros comandos
//   // sinBorde
//   noStroke();
//   // color de relleno
//   fill(150);
//   // mover Referencia
//   translate(50,300);
//   // triangle(x1, y1, x2, y2, x3, y3)
//   triangle(30, 75, 58, 20, 86, 75);
  
//   translate(100,0);
//   fill(0,120,0);
//   // quad(x1, y1, x2, y2, x3, y3, x4, y4)
//   quad(38, 31, 86, 20, 69, 63, 30, 76);
  
//   translate(100,-250);
//   // arc(centroX,centroY,ancho,alto,anguloInicio,anguloFin)
//   arc(50, 55, 50, 50, 0, HALF_PI);
//   noFill();
//   stroke(0);
//   strokeWeight(1);
//   arc(50, 55, 60, 60, HALF_PI, PI);
//   arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
//   arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

}

