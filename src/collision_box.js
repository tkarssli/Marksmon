import Collider from './collider'


class CollisionBox extends Collider{
    constructor(x, y, w, h) {
        super(x,y)
        this.w = w
        this.h = h
    }

    draw (ctx){
        
        // ctx.beginPath()
        // ctx.rect(this.x, this.y, this.w, this.h)
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = 'red'
        // ctx.stroke();
        // ctx.closePath();
    }

}

module.exports = CollisionBox;