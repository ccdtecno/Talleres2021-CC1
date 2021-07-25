/*eslint-disable*/

export default function sketch(p5) {
  let xPosicion = 200; 
  let yPosicion = 300; 
  let cont = 0;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(250);
    p5.noFill();
    p5.strokeWeight(2);
    p5.stroke(100,200,220);
      // dibuja un circulo azul en la posicion central
    p5.ellipse(200,200,50);    
  }
    
  p5.draw = () => {
    // Dibuja un circulo verde en la posición central
    p5.stroke(0,250,100);
    p5.ellipse(p5.width/2, p5.height/2,50);
    // Dibuja otro circulo verde en la posición (100,100)
    p5.ellipse(p5.width/2 - 100, p5.height/4, 50);
    // Dibuja otro circulo verde en la posición (200,100)
    p5.ellipse(xPosicion, p5.height/4, 50);
      
    // Dibuja otro circulo verde y cada vez que se repita el codigo suma 1 a la posicion en X del circulo 
    p5.ellipse(xPosicion + cont, yPosicion, 50);
    cont = cont + 1;
  }
}