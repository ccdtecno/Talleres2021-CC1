class GridBolitas {
    constructor(c,f){
        this.angle = 0;
        this.cols = c;
        this.rows = f;
        this.radiusX = width/this.cols/2;
        this.radiusY = height/this.rows/2;

        this.bolas =[]
        this.targetPos = [];
        
        for(let j = 0; j < this.rows; j++) {
            for(let i = 0; i < this.cols; i ++){
                let posX = this.radiusX + (i*this.radiusX*2);
                let posY = this.radiusY + (j*this.radiusY*2);
                let target = createVector(posX,posY);
                this.targetPos.push(target);
            }
        }
    
        let rw = 0;
        for(let i = 0; i < this.targetPos.length; i++) {
            let c = i % this.cols;
            if(c == 0) rw++;
            this.bolas[i] = new Bolita(this.targetPos[i].x,this.targetPos[i].y, 10,10,[rw-1,c]);
        }

        this.circleInterval = setInterval( () => {
            this.angle ++;
        }, 10);
    }

    displayGrid(){
        for(let i = 0; i < this.bolas.length; i++) {
            this.bolas[i].dibujar();
            this.bolas[i].moveInCircle(this.radius,this.angle,this.bolas[i].number[0]+1,this.bolas[i].number[1]+1);
        }
    }
}