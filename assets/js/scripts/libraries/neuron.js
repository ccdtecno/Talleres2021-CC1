class Neuron {
  constructor(id) {

    let px
    let py
    let pz
    let intersected;
    do {
      intersected = 0;
      px = random(-width/2+r, width/2 - r)
      py = random(-height/2+r, height/2 - r)
      pz = random(-height/2+r, height/2 - r)
      for (let neuron of neurons) {
        if (d(px, py, pz, neuron.x, neuron.y,neuron.z) < (2.7)*r) {
          intersected = 1;
          break;
        }
      }
    } while (intersected);
    this.x = px;
    this.y = py;
    this.z = pz;
    this.color = random() * 360
    this.connections = []
    this.active = false
    this.v = random(0.01)
    this.a=0
    this.id = id
  }

  find_nh() {
    let nh = []
    for (let j = 0; j < M; j++) {
      let neuron = neurons[j]
      if (d(this.x, this.y,this.z, neuron.x, neuron.y,neuron.z) < dM) {
        nh.push((j))
      }
      if(nh.length > k)
        break
    }
    this.connections = nh
  }

  glow() {
    if(!this.active)
      return
    let nh = this.connections
    let t = (1-cos(this.a*PI))
    for (let i = 0; i < nh.length; i++) {
      let v = neurons[nh[i]]
      let px = map(t, 1, 0, this.x, v.x, true)
      let py = map(t, 1, 0, this.y, v.y, true)
      let pz = map(t, 1, 0, this.z, v.z, true)
      push()
      translate(px,py,pz)
      rotateY(-a)
      rotateX(-b)
      fill(this.color,100,map(d(px,py,pz,0,0,width*1.5),height/2-r+width*1.5,-height/2+r+width*1.5,40,100))
      noStroke()
      ellipse(0, 0, 2*r2)
      pop()
    }
    this.a += this.v
    if(t>=1){
      this.active = false
      this.a = 0
    }
    
  }
  draw(r){
    push()
    translate(this.x, this.y,this.z)
      rotateY(-a)
      rotateX(-b)
    fill(this.color,100,map(d(this.x,this.y,this.z,0,0,width*1.5),height/2-r+width*1.5,-height/2+r+width*1.5,40,100))
    strokeWeight(2)
    noStroke()
    ellipse(0,0,r)
    pop()
  }
  draw_connections(){
    let nh = this.connections
    let t = (1 + cos(PI * a + this.color)) / 2 //sin(a * PI) * sin(a * PI)
    for (let i = 0; i < nh.length; i++) {
      let v = neurons[nh[i]]
      push()
      stroke(255)
      strokeWeight(5)
      line(this.x,this.y,this.z,v.x,v.y,v.z)
      pop()
    }
  }
  
}