// Caracteristicas de la bolita
let xBol,yBol,sizeBol;
// Variables para la velocidad de movimiento de la bolita
let velX, velY;

function setup() {
  createCanvas(500,500);
  background(220);
  
  // Inicialización de variables
  xBol = width/2;
  yBol = height/2;
  sizeBol = 50;
  // velocidad de la bolita
  velX = random(-5,5);
  velY = (-3,3);
}

function draw() {
  background(220);
  // funciones de la bolita
  // 1.- Se dibuja la bolita con las corrdenadas actuales
  dibujaBolita(xBol,yBol,sizeBol);
  // 2.- Se actualiza la posicion de la bolita para animar el siguiente frame
  mueveBolita();

}

function dibujaBolita(posX,posY,sz) {
  push();
  noFill();
  stroke(30,200,220);
  strokeWeight(2);
  ellipse(posX,posY,sz);
  pop();
}

function mueveBolita() {
  xBol += velX;
  yBol -= velY;
}

