/*eslint-disable*/
export default function sketch(p5) {
  let size, posX,posY,r,g, count;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(0);
    size = 5;
    r = 0;
    g = 0;
    count = 0;
    p5.noStroke();
  }
  
  p5.draw = () => {
    r = 0;
    
    while(r < 255){
      posX = p5.random(p5.width);
      posY = p5.random(p5.height/2, p5.random(0,100));
      
      p5.fill(r,0,0);
      p5.ellipse(posX,posY,size);
      r = r+1;
    }
    
    p5.fill(0);
    p5.rect(0,p5.height/2,p5.width,p5.height/2)
    
    g = p5.random(120,220);
    p5.fill(0,g,g,255);
    p5.ellipse(p5.random(p5.width), p5.random(p5.height/2,p5.height), 20);
    

    
  //   console.log("Fin");
  //   noLoop();
  }
}