

class Sprite {
    constructor(image,options){
        this.options = options;
        this.image = image;
    }
    
    draw(ctx) {
        const {sx, sy, sw, sh , x, y, w, h } = this.options;
        ctx.drawImage(this.image, sx, sy, sw, sh , x, y, w, h)
    }
}

module.exports = Sprite;
