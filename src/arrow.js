import utils from './utils'
import CollisionSphere from './collision_sphere'
import * as CONST from './consts'
import Particle from './particle'

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
        this.particles = [];
    }

   update(ctx, targets){
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
        this.draw(ctx);
        this.hitBox.update(ctx)
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

    draw (ctx){
        let theta
        let h = 9
        let w = 69

        if(this.landed === false){
            theta = Math.atan2 (this.dy,this.dx);
        } else {
            theta = this.landed
        } 


        // Arrow Particles
        const vel = Math.sqrt(this.dx ** 2 + this.dy ** 2)
        if(this.landed === false){
            
            for (let i = 0; i < 1; i++) {
                let rand = Math.random();
                const pm = (rand > .5) ? -1 : 1;
                let x = this.x + rand*pm*5
                rand = Math.random();
                let y = this.y 
                this.particles.push(new Particle(x,y, 1*rand))
            }
            
        }
        this.particles.forEach((particle, index) => {
            if (particle.life <= 0){
                this.particles = (this.particles.slice(0,index).concat(...this.particles.slice(index+1)))
            }else{
                particle.draw(ctx)
            }
        })


        let x2 = this.x + w * Math.cos(theta)
        let y2 = this.y + w * Math.sin(theta)
        this.hitBox.x = x2;
        this.hitBox.y = y2;

        ctx.save();
        ctx.translate(this.x, this.y );
        ctx.rotate(theta);
        if(!this.landed){
            ctx.drawImage(arrowImage, 0, 0, w, h, 0, -h/2, w, h)
        } else {
            ctx.drawImage(arrowImage, 0, 0, w-10, h, 0, -h/2, w, h)
        }
        ctx.restore();
    }

}

module.exports = Arrow;