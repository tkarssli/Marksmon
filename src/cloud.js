import utils from './utils'
import * as CONST from './consts'
import Scene from './scene'


class Cloud extends Scene{
    constructor(x,y) {
        super(x,y)
    }

    update(ctx){


        this.draw(ctx);
    }

    draw (ctx){
        
        ctx.beginPath()
        ctx.arc(this.x, this.y,30, 0, Math.PI * 2, false)
        ctx.lineWidth = 0;
        ctx.fillStyle=`rgb(255,255,255)`;
        ctx.fill()
        
        ctx.closePath();
    }

}

module.exports = Cloud;