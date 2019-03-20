import utils from './utils'
import * as CONST from './consts'


class Particle{
    constructor(x,y, r) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.start = Date.now();
        this.life = CONST.PARTICLE_LIFE;
    }

    draw (ctx){
        const newStart = Date.now();
        this.life -=  newStart - this.start;
        this.start = newStart;
        
        const rand = Math.random()
        this.y = this.y - 1
        this.r = this.r + .2*rand
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        ctx.lineWidth = 1;
        ctx.fillStyle=`rgba(100,100,100,${(this.life/CONST.PARTICLE_LIFE)})`;
        ctx.fill()
        
        ctx.closePath();
    }

}

module.exports = Particle;