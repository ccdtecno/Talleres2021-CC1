// Declaracion de variables
let separacion, x,y,ref, xVar;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch');
  background(0);
  // Separacion entre los circulos
  separacion = 40;
  // posicion del primer circulo de la matriz(superior izquierda)
  x = separacion;
  y = separacion;
  xVar = 0;
  ref = 0;
  
  nZ = random(100);
  frameRate(30);  
}

function draw() {
  background(0);
  
  for(let j = 0; j < (height - separacion*1.5); j += separacion*2){
    for(let i = 0; i < (width - separacion*1.5); i += separacion*2){
      // Instrucciones de dibujo
      
      // Hace un circulo blanco
      noStroke();
      fill(255);
      // Cada que se repite el codigo se modifica la posicion en 'x' y 'y', en trayectoria circular
      // ellipse(x, y, 15);      
      // ellipse(x + i, y + j, 15);      
      ellipse(x + i + 20*cos(ref), y + j + 20*sin(ref), 15);      
      
      // Hace un ellipse 
      noStroke();
      // fill(255*noise(nZ));
      fill(50,255*noise(nZ),0);
      
      nZ += .05;
      // ellipse(x,y,10,5);
      // ellipse(x + i - 10*cos(ref), y + j,10,5); 
      // ellipse(x + i, y + j - 10*sin(ref),10,5); 
      ellipse(x + i - 10*cos(ref), y + j - 10*sin(ref),10,5);   
      
      // aumento de la variable para posicion circular
      ref += 0.01;  
      
    }
    
  }
  
}