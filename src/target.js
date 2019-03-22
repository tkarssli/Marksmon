import utils from './utils'
import CollisionBox from './collision_box'
import * as CONST from './consts'

class Target {
    constructor(x, y, value) {
        this.x = x
        this.y = innerHeight-CONST.FLOOR - 20 + y
        this.w = 20
        this.h = 100
        this.hitBox = new CollisionBox(this.x, this.y, this.w, this.h)
        this.value = value

        this.image = new Image();
        this.src = './assets/target.png'    
    }

   update(ctx){
        this.changeY();
        this.draw(ctx);
        this.hitBox.update(ctx)
    }

    changeY(){
        const newY =  innerHeight-CONST.FLOOR -100- 20;
        this.y = newY
        this.hitBox.y = newY
    }


    draw (ctx){
        
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
    }

}

module.exports = Target;