/*eslint-disable*/
import "../libraries/p5.js";

export default class Bolita {
    constructor(x,y,w,h, temp=25, n=0) {
        this.pos = createVector(x,y);
        this.number = n;
        this.origin = this.pos.copy();
        this.acceleration = createVector(0,0);
        // this.velocity = createVector(random(3,5),random(1,5));
        this.velocity = createVector(0,0);

        this.size = createVector(w,h);
        this.maxSpeed = 2;
        this.maxForce = 1;
        this.arriveRadius = 50;
        this.temperature = temp;

        // this.color = color(map(this.temperature,-10,50,0,255),map(this.temperature,0,35,0,255),map(this.temperature,10,-10,0,255));
        // this.color = color(map(this.temperature,10,50,0,255),map(this.temperature,0,35,0,180),0);
        
        this.color = color(random(255),random(255),random(255));
        
        this.history = [];

        this.trailInterval = setInterval( () => {
            this.history.push(this.pos.copy());
            if (this.history.length > 2 ) {
                this.history.shift();
            }
        },5);
    }

    verNombre(texto = `${int(this.pos.x)}--${int(this.pos.y)}`) {
        push();
        noStroke();
        fill(255);
        textAlign(CENTER,CENTER);
        text(texto,this.pos.x, this.pos.y);
        pop();
    }

    dibujar() {
        push();
        noStroke();
        // stroke(255);
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size.x, this.size.y);
        pop();
    }

    dibujarTrail() {
        push();
        // beginShape();
        stroke(this.color);
        strokeWeight(1);
        noFill();
        for(let i = 0; i < this.history.length; i ++) {
            // vertex(this.history[i].x,this.history[i].y);
            let s = (this.history.length - i) * 0.25 * this.size.x/6 + this.size.x*3/4;
            ellipse(this.history[i].x,this.history[i].y,s,s);
        }
        // endShape();
        pop();
    }

    aplicarFuerza(force) {
        this.acceleration.add(force);
    }

    /////////////// SEEKING /// SIGUIENDO

    seguir(target) {
        let desired = p5.Vector.sub(target,this.pos);
        desired.normalize().mult(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.velocity).limit(this.maxForce);
        this.aplicarFuerza(steer);
    }

    /////////////// FLEEING /// HUYENDO
    
    huir(target) {
        let desired = p5.Vector.sub(this.pos, target);
        desired.normalize().mult(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.velocity).limit(this.maxForce);
        this.aplicarFuerza(steer);
    }

    /////////////// ARRIVE ///
    arrive(target) {
        let desired = p5.Vector.sub(target, this.pos);

        // La distancia es la Magnitud de el vetor que apunta hacia el objetivo(target)
        let dM = desired.mag();
        desired.normalize();

        if(dM < this.arriveRadius) {
            // Configura la magnitud del vector dependiendo de la cercania entre los elementos
            let m = map(dM,0,this.arriveRadius,0,this.maxSpeed);
            desired.mult(m);
        } else {
            desired.mult(this.maxSpeed);
        }

        let steer = p5.Vector.sub(desired,this.velocity);
        steer.limit(this.maxForce);
        this.aplicarFuerza(steer);
    }

    moveInCircle(radius,angulo,f1=1,f2=1) {
        let movX = this.origin.x + (radius * cos(f1 * angulo));
        let movY = this.origin.y + (radius * sin(f2 * angulo));
        this.arrive(createVector(movX, movY));
        this.mover();
     }

     followField(vector, forceMag = 1) {
        this.aplicarFuerza(vector.copy().setMag(forceMag));
        this.mover();
        this.fronteras(0);
      }

    mover() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

    // fronteras(margin) {
    //     let desired;
    //     if (this.pos.x < margin) {
    //       desired = createVector(this.maxSpeed, this.velocity.y);
    //     } else if (this.pos.x > width - margin) {
    //       desired = createVector(-this.maxSpeed, this.velocity.y);
    //     } 
    
    //     if (this.pos.y < margin) {
    //       desired = createVector(this.velocity.x, this.maxSpeed);
    //     } else if (this.pos.y > height - margin) {
    //       desired = createVector(this.velocity.x, -this.maxSpeed);
    //     } 
    
    //     if (desired != null) {
    //       desired.normalize().mult(this.maxSpeed);
    //       let aprox = p5.Vector.sub(desired, this.velocity);
    //       aprox.limit(this.maxForce);
    //       this.aplicarFuerza(aprox);
    //     }
    //   }  

      fronteras(margin) {
        if (this.pos.x < margin) {
        this.pos.set(width - margin, this.pos.y);
        } else if (this.pos.x > width - margin) {
            this.pos.set(0 + margin,this.pos.y);
        } 
    
        if (this.pos.y < margin) {
            this.pos.set(this.pos.x, height - margin);
        } else if (this.pos.y > height - margin) {
            this.pos.set(this.pos.x, 0 + margin);
        } 
    
        // if (desired != null) {
        //   desired.normalize().mult(this.maxSpeed);
        //   let aprox = p5.Vector.sub(desired, this.velocity);
        //   aprox.limit(this.maxForce);
        //   this.aplicarFuerza(aprox);
        // }
    }  
      
    setSize(newSize) {
        this.size = newSize;
    }

    getSize() {
        return this.size;
    }

    setPos(newPos) {
        this.pos = newPos.copy();
    }

    getPos() {
        return this.pos;
    }

    setOrigin(newOrigin) {
        this.origin = newOrigin.copy();
    }

    getOrigin() {
        return this.origin;
    }

    setVelocity(newVel) {
        this.velocity = newVel.copy();
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getColor() {
        return this.color;
    }

}


class Fish extends Bolita {
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.maxSpeed = 4;
    }

}


class Asteroids extends Bolita {
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.color = color('#555555');
    }

    dibujar() {
        push();
        noStroke();
        // stroke(20);
        for(let j = 0; j < 20; j++) {
            fill(this.color);
            this.color.setAlpha(10 + 2*j);
            ellipse(this.pos.x, this.pos.y, this.size.x * (j * 0.15), this.size.y * (j * 0.15));
        }
        pop();
    }

}