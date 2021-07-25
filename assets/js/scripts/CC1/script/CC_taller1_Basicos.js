/*eslint-disable*/
// import * as p5 from "p5"
// window.p5 = p5
// import "../libraries/p5.sound";
// import song from "../../assets/audio/nena.mp3";
// const Sketch = (p5) => {
  export default function sketch(p5) {
    p5.setup = () => {
      p5.createCanvas(600, 600)
      // cnv.parent('main__sketch');
      p5.background(180,0,200);
      // Referencia de los rectangulos
      // p5.rectMode(CENTER);
      // Referencia de los elipses
      // p5.ellipseMode(CORNER);
    
      // ancho de punto
      p5.strokeWeight(10);
      // color de punto
      p5.stroke(0,125,200);
      
      // punto(horizontal, vertical)
      p5.point(10,10);
      
      // color de línea
      p5.stroke(180,0,0);
      // ancho de línea
      p5.strokeWeight(2);
      // línea(xInicial, yInicial, xFinal, yFinal)
      p5.line(50,100,200,200);
      
      // color 
      p5.stroke(0,120,0);
      //Rectangulo(xRef,yRef,ancho,alto)
      p5.rect(100,100,25,100);
      
      // cuadrado(xRef, yRef, lado)
      p5.rect(200,200,100);
      p5.rect(200,200,100);
      p5.square(50,50,25)
      
      // ancho de puntos
      p5.strokeWeight(5);
      p5.point(100,100);
      p5.point(200,200);
      
      // colorCirculos
      p5.stroke(120,0, 50);
      // ancho de circulos
      p5.strokeWeight(2);
      // p5.elipse(xRef,yRef,ancho,alto)
      p5.ellipse(200,50,150,50);
      
      // p5.circulo(xRef,yRef, diametro)
      p5.ellipse(50,200,50);
      p5.circle(300,300,100);
      
      // ancho de puntos
      p5.strokeWeight(5);
      p5.point(50,200);
      p5.point(200,50);
      
      // Otros comandos
      // sinBorde
      p5.noStroke();
      // color de relleno
      p5.fill(150);
      // mover Referencia
      p5.translate(50,300);
      // p5.triangle(x1, y1, x2, y2, x3, y3)
      p5.triangle(30, 75, 58, 20, 86, 75);
      
      p5.translate(100,0);
      p5.fill(0,120,0);
      // p5.quad(x1, y1, x2, y2, x3, y3, x4, y4)
      p5.quad(38, 31, 86, 20, 69, 63, 30, 76);
      
      p5.translate(100,-250);
      // arco verde
      // p5.arc(centroX,centroY,ancho,alto,anguloInicio,anguloFin)
      p5.arc(50, 55, 50, 50, 0, p5.HALF_PI);
      p5.noFill();
      p5.stroke(0);
      p5.strokeWeight(1);
      p5.arc(50, 55, 60, 60, p5.HALF_PI, p5.PI);
      p5.arc(50, 55, 70, 70, p5.PI, p5.PI + p5.QUARTER_PI);
      p5.arc(50, 55, 80, 80, p5.PI + p5.QUARTER_PI, p5.TWO_PI);
  
      p5.translate(-250,200);
      p5.stroke(255, 102, 0);
      p5.line(85, 20, 10, 10);
      p5.line(90, 90, 15, 80);
      p5.stroke(0, 0, 0);
      p5.bezier(85, 20, 10, 10, 90, 90, 15, 80);
    }

    p5.draw = () => {
      // p5.background(255);
    }
  
  }

  

