// Caracteristicas de la bolita 1
let sizeBol, posBolita, velBolita;
// Caracteristicas de la bolita 2
let sizeBol2, posBolita2, velBolita2;
// Caracteristicas de la bolita 3
let sizeBol3, posBolita3, velBolita3;
// Caracteristicas de la frontera
let initFrontera, finFrontera;


function setup() {
  let cnv = createCanvas(500,500);
  cnv.parent('sketch');
  background(220);
  
  // Inicialización de variables
  sizeBol = 50;
  posBolita = createVector(width/4 + 10, 10);
  velBolita = createVector(1, 2);
  
  sizeBol2 = 20;
  posBolita2 = createVector(width/4 + 10, height/100);
  velBolita2 = createVector(-5, -1);
  
  sizeBol3 = 10;
  posBolita3 = createVector(width/4 + 80, 10);
  velBolita3 = createVector(5, 7);
  
  initFrontera = createVector(width/4,0);
  finFrontera = createVector(width*3/4, height);
  
  // Colores de bolitas
  bolCol = color(30,200,220);
  bolCol2 = color(30,200,30);
  bolCol3 = color(200,30,180);
  
}

function draw() {
  background(220);
  dibujaBolita(posBolita.x,posBolita.y,sizeBol,bolCol);
  dibujaBolita(posBolita2.x,posBolita2.y,sizeBol2,bolCol2);
  dibujaBolita(posBolita3.x,posBolita3.y,sizeBol3,bolCol3);
  mueveBolitas();
  frontera(initFrontera, finFrontera);
}

function dibujaBolita(posX,posY,sz,col) {
  push();
  noFill();
  stroke(col);
  strokeWeight(2);
  ellipse(posX,posY,sz);
  pop();
}

function mueveBolitas() {
  posBolita.add(velBolita);
  posBolita2.add(velBolita2);
  posBolita3.add(velBolita3);
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
  
  // Bolita 2
  if(posBolita2.x < inicio.x || posBolita2.x > final.x) {
    velBolita2.x *= -1;
  }
  if(posBolita2.y < inicio.y || posBolita2.y > final.y) {
    velBolita2.y *= -1;
  }
  
  // Bolita 1
  if(posBolita3.x < inicio.x || posBolita3.x > final.x) {
    velBolita3.x *= -1;
  }
  if(posBolita3.y < inicio.y || posBolita3.y > final.y) {
    velBolita3.y *= -1;
  }
   
  // Dibujar frontera
  push();
  noFill();
  rectMode(CORNERS);
  rect(inicio.x, inicio.y, final.x, final.y);
  pop();
  
}