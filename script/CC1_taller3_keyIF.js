let x, y, yVar; 

function setup() {
  let cnv = createCanvas(500,500);
  cnv.parent('sketch');
  fill(100, 245, 158);
  textSize(50);
  background(10);
  x = 0; 
  y = 50;
  yVar = 0;
}
function draw() {


}

function keyPressed() {
  text(key, x, y + 20*sin(yVar)); 
  // La variable 'key' esta definida en p5 y devulve la tecla presionada
  print(key);  
  
  // La variable 'keyCode' devuelve el nombre de algunas teclas especiales
  // Si la tecla presionada es 'Backspace', dibuja el fonodo de negro y cambia el color del texto
  if(keyCode == BACKSPACE)
    {
      background(10);
      fill(100, random(245), random(158));
    }
  
  // Variables de aumento para la posicion de las letras
  x+=10;
  yVar += 0.5;
  
  // Si la poscion de las letras en el eje X es mayor al ancho del lienzo regresa al princio del eje horizontal y baja 50px mas en el eje vertical
  if(x>width) {
    x = 0;
    y += 50;
  }
  // Si la poscion de las letras en el eje Y es mayor al alto del lienzo regresa a la posicion original  
  if(y>height) {
    x = 0; 
    y = 50;
  }
}