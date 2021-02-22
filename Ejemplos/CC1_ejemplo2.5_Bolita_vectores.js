// Caracteristicas de la bolita
let sizeBol, posBolita, velBolita;
// Caracteristicas de la frontera
let finFrontera;


function setup() {
  createCanvas(500,500);
  background(220);
  
  // Inicialización de variables
  sizeBol = 50;
  posBolita = createVector(10, 10);
  velBolita = createVector(1, 2);
  finFrontera = createVector(width, height/2);
  // finFrontera = createVector(200,200);
}

function draw() {
  background(220);
  // funciones de la bolita
  // 1.- Se dibuja la bolita con las corrdenadas actuales
  dibujaBolita(posBolita.x,posBolita.y,sizeBol);
  // 2.- Se actualiza la posicion de la bolita para animar el siguiente frame
  mueveBolita();
  // 3.- Se revisa la posicion actual de la bolita para invertir la direccion en caso de llegar a los límites establecidos en la frontera
  frontera(finFrontera.x,finFrontera.y);
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
  posBolita.add(velBolita);
}

function frontera(finFrontX, finFrontY) {
  // La frontera se calculatomando como referencia el centro de la ellipse
  
  // Fronteras en X. Cuando la posicion de la bolita es menor a 0 o mayor a el valor de "finFrontX" la bolita invierte su velocidad en el eje X
  if(posBolita.x < 0 || posBolita.x > finFrontX) {
    velBolita.x *= -1;
  }
  // Fronteras en Y. Cuando la posicion de la bolita es menor a 0 o mayor a el valor de "finFrontY" la bolita invierte su velocidad en el eje Y
  if(posBolita.y < 0 || posBolita.y > finFrontY) {
    velBolita.y *= -1;
  }
  
  
  // Dibujar frontera
  push();
  noFill();
  rect(0,0,finFrontX,finFrontY);
  pop();
  
}