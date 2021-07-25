class FlowField {
    constructor(pixelRes, noize = 0.035, angleVel = 0.025) {
      this.resolution = pixelRes;
      this.noiseIncrement = noize;
      this.angleIncrement= angleVel;
      this.cols = width / this.resolution;
      this.rows = height/ this.resolution;
      this.field = new Array(this.cols * this.rows);
      this.noize =random(100);
      this.noizeIncrement = 0.015;
      this.color = color('#23384A'); 
      this.init();
    }
  
    init() {
      let yOff = 0;
      for (var y = 0; y < this.rows; y++) {
        let xOff = 0;
        for (var x = 0; x < this.cols; x++) {
          var index = x + (y * this.cols);
          var angle = noise(xOff, yOff) * TWO_PI * 2;
          
          var v = p5.Vector.fromAngle(angle).setMag(1);
          var origin = createVector(x * this.resolution, y * this.resolution);
  
          this.field[index] = {v, origin};
          xOff += this.noiseIncrement;
        }
        yOff += this.noiseIncrement;
      }
      // console.log(this.field);
    }
  
    mostrarCampo(){
      // Mueve el inicio del campo para centrar los vectores
      translate(this.resolution/2, this.resolution/2);
  
      this.field.forEach(f =>{
        push();
        translate(f.origin.x, f.origin.y);
        stroke(this.color);
        strokeWeight(1);
        line(0, 0, this.resolution * f.v.x, this.resolution * f.v.y);
        pop();
      })
    }
  
    // moverCampo() {
    //     for(let i = 0; i < this.field.v.length) {
    //         console.log(i);
    //     }
    // }
    girarCampo(right = true) {
      this.field.forEach(f => {
        // A cada elemento del arreglo se le modifica el angulo
        // Para ello se obtiene el angulo actual y se le suma un pequeño incremento
        // que esta definido en la construccion del objeto
        if(right) {
            f.v.setHeading(f.v.heading() + this.angleIncrement);
        } else {
            f.v.setHeading(f.v.heading() - this.angleIncrement);
        }
        
      })
    }

    randomCampo(right = true) {
        this.field.forEach(f => {
          let noiseIncrement = noise(this.noize) * this.noiseIncrement;
          if(right) {
            f.v.setHeading(f.v.heading() + noiseIncrement);
        } else {
            f.v.setHeading(f.v.heading() - noiseIncrement);
        }
          this.noize += this.noizeIncrement;
        })
        
      }
    
    getVectors() {
      let vectorArray = new Array(this.field.length);
      for(let i = 0; i < this.field.length; i++) {
        vectorArray[i] = this.field[i].v.copy();
      }
      return(vectorArray);
    }
  
    getOrigins() {
      let originArray = new Array(this.field.length);
      for(let i = 0; i < this.field.length; i++) {
        originArray[i] = this.field[i].origin.copy();
      }
      return(originArray);
    }
  
  }