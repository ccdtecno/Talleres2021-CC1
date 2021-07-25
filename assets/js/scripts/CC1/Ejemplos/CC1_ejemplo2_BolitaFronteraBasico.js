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
    xBol = p5.width/4;
    yBol = p5.height/2;
    sizeBol = 50;
    // velocidad de la bolita
    velX = 5;
    velY = 3;
  }

  p5.draw = () => {
    p5.background(220);
    // funciones de la bolita
    // 1.- Se dibuja la bolita con las corrdenadas actuales
    dibujaBolita(xBol,yBol,sizeBol);
    // 2.- Se actualiza la posicion de la bolita para animar el siguiente frame
    mueveBolita();
    // 3.- Se revisa la posicion actual de la bolita para invertir la direccion en caso de llegar a los límites establecidos en la frontera
    frontera();
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

  function frontera() {
    // La frontera se calculatomando como referencia el centro de la ellipse
    
    // Fronteras en X. Cuando la posicion de la bolita es menor a 0 o mayor a la mitad del lienzo con respecto al eje de las X, la bolita invierte su velocidad en dicho eje.
    if(xBol < 0 || xBol > p5.width/2) {
      velX *= -1;
    }
    // Fronteras en Y. Cuando la posicion de la bolita es menor a 0 o mayor a la altura total del lienzo con respecto al eje de las Y, la bolita invierte su velocidad en dicho eje.
    if(yBol < 0 || yBol > p5.height) {
      velY *= -1;
    }
    
    
    // Dibujar frontera
    p5.push();
    p5.noFill();
    p5.rect(0,0,p5.width/2,p5.height);
    p5.pop();
    
  }
}