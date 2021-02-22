// Declaracion de variables 
let xBolita;
let yBolita;
let xCuadrito;
let yCuadrito;
let frame;


function setup() {
  createCanvas(400, 400);
  // Inicializacion de variables
  xBolita = 0; 
  yBolita = 0;
  xCuadrito = 0;
  yCuadrito = 0;
  // Configuracion para la referencia de los rectangulos
  rectMode(CENTER);
  angleMode(DEGREES);
  frame = 0;
  angle = 0;
}

function draw() {
  //Cada que se reinicia el codigo se vuelve a pintar el lienzo del mismo color, logrando el efecto de animación
  background(0);
  // Dibuja un circulo y cada vez que se repita el codigo suma 1 a la posicion en X y Y del circulo 
  ellipse(xBolita + frame, yBolita + frame, 50);
  // Llamado a ejecucion de la funcion cuadrito
  cuadrito(frame);
  // Llamado a ejecucion de la funcion circool
  circool(frame);
  // Incremento del frame como referencia para la animación
  frame++;
}

function cuadrito(frame){
  // Bloqueo de la matriz de dibujo, con esto se aplican las opciones de estilo solo a las instrucciones que estes dentro de push y pop
  angle += 3;
  push();
  noStroke();
  fill(0,255,0);
  // Transformacion de posicion en el canvas
  translate(400-frame,frame);
  // transformacion de rotacion 
  rotate(angle);
  rect(xCuadrito, yCuadrito, 50);
  // Imprime el angulo en consola
  // console.log(angle);
  pop();
}
     
function circool(frame){
  push();
  noFill();
  strokeWeight(5);
  stroke(0,100,200);
  // Transformacion de tamaño del circulos central, cada nuevo frame se actualiza el tamaño del circulo
  ellipse(width/2, height/2, 50 + frame);
  pop();
}