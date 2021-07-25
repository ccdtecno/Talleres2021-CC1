/*eslint-disable*/

export default function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(500,500);
    p5.background(0);
    p5.noStroke();
    p5.fill(255);
    p5.ellipse(80,420,160)
    p5.ellipse(250,80,160)
    p5.ellipse(420,420,160)
    p5.fill(0);
    p5.triangle(80,420,250,80,420,420);
  }
}
  