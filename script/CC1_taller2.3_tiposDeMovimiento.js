
// Declaracion de refencias para la animacion 
let frame1;
let frame2;
let frame3;
let frame4;
// Variable para el PerlinNoise
let noize = 0;

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent('main__sketch');
  frame1 = 0;
  frame2 = 0;
  frame3 = 0;
  frame4 = 0;
}

function draw() {
  background(0);
  
  // Dibuja un circulo rojo que aumenta linealmente de 1 e 1
  push();
  noFill();
  strokeWeight(5);
  stroke(255,50,50);
  circool(frame1);
  pop();
  frame1++;
  
  // Dibuja un circulo verde que aumenta linealmente por un factor de 4 respecto a la animacion anterior
  push();
  noFill();
  strokeWeight(5);
  stroke(50,150,0);
  circool(frame2);
  pop();
  frame2 = frame1 * 4;
  
  // Dibuja un circulo azul que varia su tamaño en un valor completamente aleatorio entre 50 y 250
  push();
  noFill();
  strokeWeight(5);
  stroke(80,180,255);
  circool(frame3);
  pop();
  frame3 = random(0,200);
  
  
  // Dibuja un circulo rosa que varia su tamaño de forma aleatoria entre 50 y 250 pero siguiendo el algoritmo de Perlin Noise
  push();
  noFill();
  strokeWeight(5);
  stroke(255,80,200);
  circool(frame4);
  pop();
  frame4 = 200 * noise(noize);
  // control de variacion en perlin noise
  noize += 0.1;
}

     
function circool(frame){
  ellipse(width/2, height/2, 50 + frame);
}