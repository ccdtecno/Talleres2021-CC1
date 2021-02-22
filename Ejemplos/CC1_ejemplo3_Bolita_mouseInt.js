// Caracteristicas de la bolita 1
let sizeBol, posBolita, velBolita;
let initFrontera, finFrontera;
let bolCol;


function setup() {
  createCanvas(500,500);
  background(220);
  
  // Inicialización de variables
  sizeBol = 50;
  posBolita = createVector(width/4 + 10, 10);
  velBolita = createVector(0, 1);
  
  initFrontera = createVector(width/4,0);
  finFrontera = createVector(width*3/4,height);
  
  bolCol = color(200,30,180);
  
}

function draw() {
  background(220);
  dibujaBolita(posBolita.x,posBolita.y,sizeBol,bolCol);
  mueveBolita();
  frontera(initFrontera, finFrontera);
  if(mouseIsPressed) {
    viento();
  }
}

function dibujaBolita(posX,posY,sz,col) {
  push();
  noFill();
  stroke(col);
  strokeWeight(2);
  ellipse(posX,posY,sz);
  pop();
}

function mueveBolita() {
  posBolita.add(velBolita);
}

function frontera(frontIni, frontFin) {
  let inicio = frontIni.copy();
  let final = frontFin.copy();
  
  // Bolita 1
  if(posBolita.x < inicio.x || posBolita.x > final.x) {
    velBolita.x *= -1;
  }
  if(posBolita.y < inicio.y || posBolita.y > final.y) {
    velBolita.y *= -1;
  }
   
  // Dibujar frontera
  push();
  noFill();
  rectMode(CORNERS);
  rect(inicio.x, inicio.y, final.x, final.y);
  pop();
  
}

function viento() {
  let wind = createVector(random(-5,5),random(-0.5,1.5));
  let velOriginal = velBolita.copy();
  velBolita.add(wind);
  // velBolita.set(0,-1);
}
