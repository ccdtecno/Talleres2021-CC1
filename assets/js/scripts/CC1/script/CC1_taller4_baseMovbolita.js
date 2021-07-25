/*eslint-disable*/
export default function sketch(p5) {
  let x, y, yAng;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(220);
    x = 0;
    y = p5.height/2;
    yAng = 0;
  }

  p5.draw = () => {
    p5.background(220);
    
    p5.ellipse(x,y+(100*Math.sin(yAng)),30);
    x += 2;
    
    yAng-=0.2;
  }
}