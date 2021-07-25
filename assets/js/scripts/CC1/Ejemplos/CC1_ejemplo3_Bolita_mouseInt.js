/*eslint-disable*/
export default function sketch(p5) {  
  // Caracteristicas de la bolita 1
  let sizeBol, posBolita, velBolita;
  let initFrontera, finFrontera;
  let bolCol;


  p5.setup = () => {
    p5.createCanvas(500,500);
    p5.background(220);
    
    // Inicialización de variables
    sizeBol = 50;
    posBolita = p5.createVector(p5.width/4 + 10, 10);
    velBolita = p5.createVector(0, 1);
    
    initFrontera = p5.createVector(p5.width/4,0);
    finFrontera = p5.createVector(p5.width*3/4,p5.height);
    
    bolCol = p5.color(200,30,180);
    
  }

  p5.draw = () => {
    p5.background(220);
    dibujaBolita(posBolita.x,posBolita.y,sizeBol,bolCol);
    mueveBolita();
    frontera(initFrontera, finFrontera);
    if(p5.mouseIsPressed) {
      viento();
    }
  }

  function dibujaBolita(posX,posY,sz,col) {
    p5.push();
    p5.noFill();
    p5.stroke(col);
    p5.strokeWeight(2);
    p5.ellipse(posX,posY,sz);
    p5.pop();
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
    p5.push();
    p5.noFill();
    p5.rectMode(p5.CORNERS);
    p5.rect(inicio.x, inicio.y, final.x, final.y);
    p5.pop();
    
  }

  function viento() {
    let wind = p5.createVector(p5.random(-5,5),p5.random(-0.5,1.5));
    let velOriginal = velBolita.copy();
    velBolita.add(wind);
    // velBolita.set(0,-1);
  }

}