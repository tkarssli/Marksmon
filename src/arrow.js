import utils from './utils'
import CollisionSphere from './collision_sphere'
import * as CONST from './consts'

const arrowImage = new Image();
arrowImage.src = '../assets/arrow.png'

class Arrow {
    constructor(x, y, vect) {
        this.x = x;
        this.y = y;
        this.dx = -(vect.vel/CONST.VEL_DIV) * Math.cos(vect.theta);
        this.dy = -(vect.vel/CONST.VEL_DIV) * Math.sin(vect.theta);
        this.arrow_length = 40;
        this.landed = false;
        this.hitBox = new CollisionSphere(0 ,0 , 5);
    }

   update(ctx, targets){
       let hit = false;
        targets.forEach( target => {
            if(this.targetHit(target)){
                hit = true
            }
        })
        const theta = Math.atan2 (this.dy,this.dx);
        // if ()
       if (Math.abs(theta) < .30 && this.y > innerHeight-CONST.FLOOR){
           this.dy = -this.dy/1.5
           this.dx = this.dx/2
           if(this.dy < .1 && this.dy > -.1){
               this.dy = 0
           }

           
           
        }else if( this.y > innerHeight-CONST.FLOOR || hit){
           
            this.setLanded()
       } else {
          
           this.dy += CONST.GRAVITY
       }

        this.x += this.dx
        this.y += this.dy;
        this.draw(ctx);
        this.hitBox.update(ctx)
    }

    setLanded(){
        if(!this.landed){
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

    draw (ctx){
        let theta
        let h = 9
        let w = 69

        if(!this.landed){
            theta = Math.atan2 (this.dy,this.dx);
        } else {
            theta = this.landed
        } 


        let x2 = this.x + w * Math.cos(theta)
        let y2 = this.y + w * Math.sin(theta)
        console.log(`${x2} ${this.x}`)
        this.hitBox.x = x2;
        this.hitBox.y = y2;

        ctx.save();
        ctx.translate(this.x + w / 2, this.y + h/ 2);
        // console.log(drag.degs * Math.PI / 180)
        ctx.rotate(theta);
        // c.drawImage(myImage, sX,sY, w, h, -w/2, -h/2, w, h)
        ctx.drawImage(arrowImage, 0, 0, w, h, -w/2, -h/2, w, h)
        ctx.restore();
        
        // ctx.beginPath()
        // ctx.moveTo(this.x, this.y)
        // ctx.lineTo(x2, y2)
        // ctx.strokeStyle = "black"
        // ctx.lineWidth = 5
        // ctx.stroke()
        // ctx.closePath();
    }

}

module.exports = Arrow;