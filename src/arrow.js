import utils from './utils'
import CollisionSphere from './collision_sphere'
import * as CONST from './consts'

const arrowImage = new Image();
arrowImage.src = './assets/arrow.png'

class Arrow {
    constructor(x, y, vect) {
        this.x = x;
        this.y = y;
        this.dx = -(vect.vel/CONST.VEL_DIV) * Math.cos(vect.theta);
        this.dy = -(vect.vel/CONST.VEL_DIV) * Math.sin(vect.theta);
        this.arrow_length = 40;
        this.landed = false;
        this.hitValue = 0;
        this.hitBox = new CollisionSphere(0 ,0 , 5);

        this.lastPoint = {x: x, y:y, ttl: CONST.ARROW_TRAIL_TTL};
        this.trailPoints = [];
    }

   update(c, targets){
       this.trailPoints.push({x: this.x, y:this.y, ttl: CONST.ARROW_TRAIL_TTL})
       let hit = false;
       this.hitValue = 0;
        targets.forEach( target => {
            if(this.targetHit(target)){
                hit = true;
                this.hitValue += target.value;
            }
        })

        const theta = Math.atan2 (this.dy,this.dx);
       if (Math.abs(theta) < .45 && Math.round(this.y) >= CONST.FLOOR && this.dy > 0){
           if(this.dy > 0){
               this.dy = -this.dy/1.5
               if(this.dy < .1 && this.dy > -.1){
                   this.dy = 0
                }
            }
            
            this.dx = this.dx/1.2
            
            
        }else if( this.y >= CONST.FLOOR || hit){
            this.setLanded()
        } else {
            this.dx += (this.dx > 0) ? -.01 : 0
            this.dy += CONST.GRAVITY
        }
        
        this.x += this.dx
        this.y += this.dy;
        this.draw(c);
        this.hitBox.update(c)
    }
    
    setLanded(){
        if(this.landed === false){

            this.landed = Math.atan2 (this.dy,this.dx);
        }
        this.dy = 0
        this.dx = 0

    }

    targetHit(target){
        const arrowHB = this.hitBox;
        const targetHB = target.hitBox;

        const distX = Math.abs(arrowHB.x - targetHB.x -targetHB.w/2);
        const distY = Math.abs(arrowHB.y - targetHB.y -targetHB.h/2);

        if (distX > (targetHB.w/2 + arrowHB.r)) {return false}
        if (distY > (targetHB.h/2 + arrowHB.r)) {return false}

        if (distX <= (targetHB.w/2)) {return true}
        if (distY <= (targetHB.h/2)) {return true}

        const dx = distX-targetHB.w/2;
        const dy = distY-targetHB.h/2;
        return (dx*dx+dy*dy<=(arrowHB.r*arrowHB.r));

    }

    draw (c){
        let theta
        let h = 9
        let w = 69

        if(this.landed === false){
            theta = Math.atan2 (this.dy,this.dx);
        } else {
            theta = this.landed
        } 

        c.beginPath();
        c.strokeStyle ="rgba(100,100,255,.3)";
        c.lineWidth = 2;
        const firstPoint = this.trailPoints[0];
        c.moveTo(firstPoint.x, firstPoint.y);
        this.trailPoints.forEach(point => {
            c.lineTo(point.x, point.y);
            point.ttl = point.ttl-1;
            if(point.ttl <= 0){
                this.trailPoints.shift();
            }
        })
        c.lineTo(this.x, this.y);

        c.stroke();
        c.closePath();


        let x2 = this.x + w * Math.cos(theta)
        let y2 = this.y + w * Math.sin(theta)
        this.hitBox.x = x2;
        this.hitBox.y = y2;

        c.save();
        c.translate(this.x, this.y );
        c.rotate(theta);


        if(!this.landed){
            c.drawImage(arrowImage, 0, 0, w, h, 0, -h/2, w, h)
        } else {
            c.drawImage(arrowImage, 0, 0, w-10, h, 0, -h/2, w, h)
        }
        c.restore();
    }

}

module.exports = Arrow;