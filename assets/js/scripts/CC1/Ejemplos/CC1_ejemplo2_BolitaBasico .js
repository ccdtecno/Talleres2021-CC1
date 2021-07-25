/*eslint-disable*/
export default function sketch(p5) {
  // Caracteristicas de la bolita
  let xBol,yBol,sizeBol;
  // Variables para la velocidad de movimiento de la bolita
  let velX, velY;

  p5.setup = () => {
    p5.createCanvas(500,500);
    p5.background(220);
    
    // Inicialización de variables
    xBol = p5.width/2;
    yBol = p5.height/2;
    sizeBol = 50;
    // velocidad de la bolita
    velX = p5.random(-5,5);
    velY = (-3,3);
  }

  p5.draw = () => {
    p5.background(220);
    // funciones de la bolita
    // 1.- Se dibuja la bolita con las corrdenadas actuales
    dibujaBolita(xBol,yBol,sizeBol);
    // 2.- Se actualiza la posicion de la bolita para animar el siguiente frame
    mueveBolita();

  }

  function dibujaBolita(posX,posY,sz) {
    p5.push();
    p5.noFill();
    p5.stroke(30,200,220);
    p5.strokeWeight(2);
    p5.ellipse(posX,posY,sz);
    p5.pop();
  }

  function mueveBolita() {
    xBol += velX;
    yBol -= velY;
  }

}