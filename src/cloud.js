import utils from './utils'
import * as CONST from './consts'
import Scene from './scene'


class Cloud extends Scene{
    constructor(x,y) {
        super(x,y)
        this.puffs = [];

        const puff = (x,y) => {
            return {x, y}
        }

        for (let i = 0; i < 20; i++) {
            let rand = Math.random();
            const x = this.x+(100*rand)
            rand = Math.random();
            const y = this.y+(100*rand)
            // console.log(y)
            this.puffs.push(puff(x,y))

        }
    }

    update(ctx){


        this.draw(ctx);
    }



    draw (ctx){

       
        this.puffs.forEach(puff => {
            ctx.beginPath()
            ctx.arc(puff.x, puff.y,30, 0, Math.PI * 2, false)
            ctx.fillStyle=`rgb(255,255,255)`;
            ctx.fill()
            ctx.lineWidth = 0;
            ctx.closePath();
        })
        ctx.fillStyle='black'

        
    }

}

module.exports = Cloud;