import Collider from './collider'

class CollisionSphere extends Collider{
    constructor(x,y, r) {
        super(x,y)
        this.r = r
    }

    draw (ctx){
        
        // ctx.beginPath()
        // ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = 'red'
        // ctx.stroke();
        // ctx.closePath();
    }

}

module.exports = CollisionSphere;