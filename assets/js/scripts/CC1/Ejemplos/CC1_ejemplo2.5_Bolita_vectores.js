/*eslint-disable*/
export default function sketch(p5) {
  // Caracteristicas de la bolita
  let sizeBol, posBolita, velBolita;
  // Caracteristicas de la frontera
  let finFrontera;


  p5.setup = () => {
    p5.createCanvas(500,500);
    p5.background(220);
    
    // Inicialización de variables
    sizeBol = 50;
    posBolita = p5.createVector(10, 10);
    velBolita = p5.createVector(1, 2);
    finFrontera = p5.createVector(p5.width, p5.height/2);
    // finFrontera = createVector(200,200);
  }

  p5.draw = () => {
    p5.background(220);
    // funciones de la bolita
    // 1.- Se dibuja la bolita con las corrdenadas actuales
    dibujaBolita(posBolita.x,posBolita.y,sizeBol);
    // 2.- Se actualiza la posicion de la bolita para animar el siguiente frame
    mueveBolita();
    // 3.- Se revisa la posicion actual de la bolita para invertir la direccion en caso de llegar a los límites establecidos en la frontera
    frontera(finFrontera.x,finFrontera.y);
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
    p5.push();
    p5.noFill();
    p5.rect(0,0,finFrontX,finFrontY);
    p5.pop();
    
  }
}