import utils from './utils';
import Arrow from './arrow';
import Target from './target';
import Cloud from './cloud';
import Sprite from './sprite';
import * as CONST from './consts';
import { inherits } from 'util';

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

let translated = {x:0, y: 0};
let lastPos = {x: 0, y:0 };
let numArrows = CONST.NUM_ARROWS;

let hudX = 0;
let waiting = false;
let mouseLock = false;
canvas.width = innerWidth
canvas.height = innerHeight

// c.scale(1,-1)
// c.translate(0,)
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Constants
const FLOOR = CONST.FLOOR
const VECTOR_LENGTH = CONST.VECTOR_LENGTH

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

const drag = {
    mousedown: false,
    max: VECTOR_LENGTH,
    x: 0,
    y: 0,
    vel:0,
    theta:0
};
// GLOBAL VARS
// Scenery
let clouds;
let trees;
let bushes;
// Session
let arrows;
let points;
const init = () => {
    arrows = [];
    points = 0;
    clouds = []
    trees = []
    bushes = []
    resetHud();

    points = 0;
    arrows =[];
    numArrows = CONST.NUM_ARROWS;
    for (let i = 0; i < 20; i++) {
        let rand = Math.random()
        let y = 500*rand 
        rand = Math.random();

        clouds.push(new Cloud(CONST.WORLD_X * rand, y))
    }

    // const {sx, sy, sw, sh , x, y, w, h } = this.options;


    // Scenery Sprites
    const path =  './assets/foliage.png'
    let image = new Image();
    image.src = path;
    const treesOptions = [
        {sx: 2, sy: 101, sw: 61, sh: 139 , x: 0, y: 0, w: 103, h: 236 },
        {sx: 70, sy: 107, sw: 57, sh: 133 , x: 0, y: 0, w: 96, h: 226 },
        {sx: 135, sy: 132, sw: 48, sh: 106 , x: 0, y: 0, w: 81, h: 180},
        // {sx: 2, sy: 101, sw: 61, sh: 139 , x: 0, y: 0, w: 61, h: 139 },
    ]
    Object.assi
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * treesOptions.length);
        const to = Object.assign({},treesOptions[index])
        to.x = Math.random()*CONST.WORLD_X;
        to.y = innerHeight - CONST.FLOOR - to.h +20;
        const tree = new Sprite(image,to)
        trees.push(tree)

    }
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('mousedown', event => {
    if (showMenu || over){
        // if event.clientX 
        Menu.handleClick(event.clientX, event.clientY)

    } else if(!mouseLock) {
        arrow = null;
        c.translate(translated.x, translated.y)
        translated.x = 0
        translated.y = 0
    
        drag.mousedown = true;
        drag.x = event.clientX
        drag.y = event.clientY
    
        lastPos.x = innerWidth/2
        lastPos.y  = innerHeight-FLOOR-1
    }

})

addEventListener('mouseup', event => {
    if ( showMenu || over) {

    } else if( !mouseLock) {
        numArrows--
        drag.mousedown = false
        dragLine = drag
        delete drag.mousedown
        arrow = new Arrow(innerWidth/10,innerHeight-FLOOR-160, dragLine)
    
        arrows.push(arrow)
    
        lastPos.x = innerWidth/2;
        lastPos.y = innerHeight-FLOOR-10;
        waiting= true;
        mouseLock = true;
    }

})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

})

// Implementation
let dragLine
let arrow;
let targets = [];
targets.push(new Target(1500, 0, 100))
targets.push(new Target(4000, 0, 500))
targets.push(new Target(5000, 0, 1000))

let myImage = new Image();
myImage.src = './assets/bow.png'
// myImage.onload = function() { drawBow();} 

function drawBow(x, y) {
    c.save();
    let mD = drag.mousedown ? 109 : 0
    let sX = ((Math.floor((1119*drag.vel/100)/109)*109  ) + mD)
    let sY = (sX > 545 ? 140 : 0)
    sX = sX % 654
    c.translate(x + 109 / 2, y + 140/ 2);
    c.rotate(-drag.degs * Math.PI / 180);
    c.drawImage(myImage, sX,sY, 109, 140, -109/2, -140/2, 109, 140)
    c.restore();
}

const mouseDrag = c => {
    let x = mouse.x;
        let y = mouse.y;
        let dist = utils.distance(drag.x, drag.y, x, y);

        let theta = utils.angle(drag.x, drag.y, x, y)
        let degs = utils.angle(x, y, drag.x, drag.y);
        degs *= -180 / Math.PI
        if(  dist > drag.max){
            // Math.pow(drag.max, 2)
            x = drag.x + drag.max * Math.cos(theta)
            y = drag.y + drag.max * Math.sin(theta)
            dist = drag.max
        }
        let vel = (dist/drag.max)*100
        c.beginPath()
        c.moveTo(drag.x, drag.y)
        c.lineTo(x, y)
        c.strokeStyle = "black"
        c.stroke()
        c.closePath();
        c.fillStyle= "black"
        c.fillText(Math.round(100*degs)/100, drag.x, drag.y)
        c.fillText(Math.round(100*vel)/100, x, y)

        drag.degs = degs
        drag.vel = vel
        drag.theta= theta

}

class Menu{

    static handleClick(x,y){
        if (x > innerWidth/2-250 && x < innerWidth/2-250+500 
            && y > innerHeight/2-100 && y<innerHeight/2){
            // console.log("sdsd")

            setTimeout(() => {
                if( showMenu){
                    showMenu = false;
                } else if ( over ){
                    over = false;
                    init();
                    
                }
            }, 200)
            
        }
    }
    static draw(c) {
        c.beginPath()
        c.fillStyle= "black"
        c.strokeStyle='rgba(0,0,0,1)'
        c.font = "100px Arial";
        c.fillText(`Start Game`, innerWidth/2-250,innerHeight/2, 500)
        c.font = "30px Arial";
        c.fillText(`Click and Drag to fire an arrow`, innerWidth/2-225,innerHeight/2-100, 500)
        c.stroke()
        c.closePath()

    }
    static over(c) {
        c.beginPath()
        c.fillStyle= "black"
        c.strokeStyle='rgba(0,0,0,1)'
        c.font = "100px Arial";
        c.fillText(`Start Over`, innerWidth/2-250,innerHeight/2, 500)
        c.font = "30px Arial";
        c.fillText(`Final Score: ${points}`, innerWidth/2-225,innerHeight/2-100, 500)
        c.stroke()
        c.closePath()

    }
}

const resetHud = () => {
    c.translate(translated.x, translated.y)
    translated.x = 0
    translated.y = 0
    hudX = innerWidth/2;
    mouseLock = false;
}


let showMenu = true;
let over = false;
// Animation Loop
function animate() {
    c.clearRect(translated.x, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    if(numArrows <= 0){
        over = true;
        Menu.over(c)
    }

    if(showMenu && numArrows > 0){
        Menu.draw(c)
    } else if(showMenu){
        // showMenu = true;
    }


    
    // Line 
    //  c.beginPath()
    //  c.moveTo(0, innerHeight-FLOOR)
    //  c.lineTo(10000, innerHeight-FLOOR)
    //  c.strokeStyle = "black"
    //  c.lineWidth = 1
    //  c.closePath()

    // Ground
    c.beginPath()
    c.rect(0, innerHeight-FLOOR, CONST.WORLD_X, 300)
    c.fillStyle = 'rgba(97, 51, 21, 1)'
    c.fill()
    c.closePath()

    // Sky
    c.beginPath()
    c.rect(0, 0, CONST.WORLD_X, innerHeight-FLOOR)
    c.fillStyle = 'rgba(115, 175, 246, .4)'
    c.fill()
    c.closePath()

    // Clouds
    //  clouds.forEach(cloud => cloud.update(c))

    // Foliage
    trees.forEach(tree => tree.draw(c))

    
    
    let deltaX = 0
    let deltaY = 0
    if(arrow && arrow.x > innerWidth/2 && arrow.landed === false){
        
        // arrow.update(c);
        deltaX = arrow.x - lastPos.x
        deltaY = arrow.y - lastPos.y
        translated.x += deltaX
        // translated.y += deltaY
        lastPos.x = arrow.x
        // lastPos.y = arrow.y
    } else if (arrow && arrow.landed !== false){
        setTimeout(() => {
            resetHud();
        }, 2000)
        
        hudX = arrow.x;
        waiting = false;
        arrow=null;
    }

    c.translate(-deltaX, 0)


    // HUD Text
    c.beginPath()
    c.fillStyle= "black"
    c.strokeStyle='rgba(0,0,0,1)'
    c.font = "30px Arial";

    // Scanning Text
    console.log(`Waiting: ${waiting}, HudX:${hudX}`)
    if (waiting){
        hudX = arrow ? Math.max(arrow.x, innerWidth/2) : innerWidth/2
    }
    // Distance
    c.fillText(`${arrow ? Math.round(arrow.x *10)/100 : 0.00} M`, hudX,50)
    // Score
    c.fillText(`${points} Points`, hudX + innerWidth/4,50)
    // Remaining arrows
    c.fillText(`${numArrows} Arrows`, hudX-innerWidth/4,50)

    c.stroke()
    c.closePath()

    points = 0;
    targets.forEach(target => {
        target.update(c)})
    arrows.forEach(arrow => {
        points += arrow.hitValue;
        arrow.update(c, targets)})
    drawBow(innerWidth/10, innerHeight-FLOOR-200,)
    
    if(drag.mousedown){
        mouseDrag(c)
    }
}

init()
animate()