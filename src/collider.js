class Collider {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

   update(ctx){
        this.draw(ctx);
    }

}

module.exports = Collider;