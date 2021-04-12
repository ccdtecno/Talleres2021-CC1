// Variables globales
let diametro, x, y, yVar, xVar;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('sketch');
  background(220);
  // diametro general de las bolitas
  diametro = 35;
  
  xVar = 0;
  yVar = 0;
  
}

function draw() {
  background(220);
  
  // posicion inicial de la fila de bolitas
  x = diametro;
  y = diametro;
  
  // Estructura for()
  // me permite repetir un conjunto de instrucciones por un numero 'i' de veces
  // for(Declaracion del 'contador' i, condicion de final del loop, aumento despues de cada repeticion)
  for(let i = 0; i < 10;i++){
    // Calculo de la separacion de las bolitas
    let separacion = i * diametro;
    // Dibuja una bolita en la posicion (x + separacion actual + el movimiento de oscilacion en X, y)
    // ellipse(x,y, diametro);
    // ellipse(x + separacion, y, diametro);
    ellipse(x + separacion + (15*sin(xVar)), y, diametro);
    
    // dibuja buevito
    // ellipse(x + separacion + (15*sin(xVar)), y, diametro*3/4,diametro);
    // console.log(separacion);
  }
  // Aumento para la variable del movimiento oscilatorio en X
  xVar += 0.1;
  
  
  // posicion inicial de la segunda fila de bolitas
  x = diametro;
  y = height / 2;
  
  for(let i = 0; i < 3; i++){
    let separacion = i * diametro * 4;
    // Dibuja una bolita en la posicion (x + separacion actual, y + movimiento oscilatorio en Y)
    ellipse(x + separacion, y + (25*sin(yVar)), diametro);
    // console.log(separacion);
  }
  // Aumento para la variable del movimiento oscilatorio en Y
  yVar += 0.2;
  
  
}