import utils from './utils'
import CollisionBox from './collision_box'
import * as CONST from './consts'

class Target {
    constructor(x, y, value) {
        this.x = x
        this.y = innerHeight-CONST.FLOOR - 20 + y
        this.w = 30
        this.h = 80
        this.hitBox = new CollisionBox(this.x, this.y, this.w, this.h)
        this.value = value
        this.image = new Image();
        this.image.src = './assets/target.png'    
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
        
        ctx.drawImage(this.image, 282, 38, 548, 934 , this.x-40, this.y-20, 109, 186)
        ctx.fillStyle = "white"
        ctx.fillText(`${Math.round(this.x *10)/100 }`, this.x, this.y+200)
    }

}

module.exports = Target;