import utils from './utils';
import Arrow from './arrow';
import Target from './target';
// import Cloud from './cloud';
import Sprite from './sprite';
import css from './style.css';
import * as CONST from './consts';

// Modal
// Get the modal
const modal = document.getElementById('myModal');

// Get Contents
const mainMenu = document.getElementById('main-menu');
const overMenu = document.getElementById('over-menu');


// Get the button that opens the modal
const mainMenuBtn = document.getElementById("mainMenuBtn");
const overMenuBtn = document.getElementById("overMenuBtn");

// Final Score
const finalScoreElement = document.getElementById("final-score");

// When the user clicks the button, open the modal 
mainMenuBtn.onclick = function() {
modal.style.display = "none";
    showMenu = false;
}
overMenuBtn.onclick = function() {
    modal.style.display = "none";
    over = false;
    init();
}


const canvas = document.querySelector('#game-canvas')
const c = canvas.getContext('2d')

let translated = {
    x: 0,
    y: 0
};
let lastPos = {
    x: 0,
    y: 0
};
let numArrows = CONST.NUM_ARROWS;

let hudX = 0;
let waiting = false;
let mouseLock = false;
canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const drag = {
    mousedown: false,
    max: CONST.VECTOR_LENGTH,
    x: 0,
    y: 0,
    vel: 0,
    theta: 0
};

// GLOBAL VARS
// Scenery
let trees;
// Session
let arrows;
let points;
let distance = 0.00;
let targets;
let ranges;
let arrow;


// Implementation
let dragLine

// DOM
    // Nothing here yet

const init = () => {
    targets = [];
    arrows = [];
    points = 0;
    trees = []
    resetHud();

    points = 0;
    arrows = [];
    numArrows = CONST.NUM_ARROWS;

    // Targets
    const rand = Math.random()
    ranges = [];
    for (let i = 1; i < 5; i++) {
        ranges.push((3000 * i) + (3000 * rand))
    }
    targets.push(new Target(ranges[0], 0, 100))
    targets.push(new Target(ranges[1], 0, 500))
    targets.push(new Target(ranges[2], 0, 1000))
    targets.push(new Target(ranges[3], 0, 1000))


    // Scenery Sprites
    const path = './assets/foliage.png'
    let image = new Image();
    image.src = path;
    const treesOptions = [{
            sx: 2,
            sy: 101,
            sw: 61,
            sh: 139,
            x: 0,
            y: 0,
            w: 103,
            h: 236
        },
        {
            sx: 70,
            sy: 107,
            sw: 57,
            sh: 133,
            x: 0,
            y: 0,
            w: 96,
            h: 226
        },
        {
            sx: 135,
            sy: 132,
            sw: 48,
            sh: 106,
            x: 0,
            y: 0,
            w: 81,
            h: 180
        },
        // {sx: 2, sy: 101, sw: 61, sh: 139 , x: 0, y: 0, w: 61, h: 139 },
    ]
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * treesOptions.length);
        const to = Object.assign({}, treesOptions[index])
        to.x = Math.random() * CONST.WORLD_X/2;
        to.y = CONST.FLOOR - to.h + 20;
        const tree = new Sprite(image, to)
        trees.push(tree)

    }
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('mousedown', event => {
    if (showMenu || over) {
        // Do nothing

    } else if (!mouseLock) {
        arrow = null;
        c.translate(translated.x, translated.y)
        translated.x = 0
        translated.y = 0

        drag.mousedown = true;
        drag.x = event.clientX
        drag.y = event.clientY

        lastPos.x = innerWidth / 2
        lastPos.y = CONST.FLOOR - 1
    }

})

addEventListener('mouseup', event => {
    if (showMenu || over) {

    } else if (!mouseLock) {
        numArrows--
        drag.mousedown = false
        dragLine = drag
        delete drag.mousedown
        arrow = new Arrow(innerWidth / 10, CONST.FLOOR - 160, dragLine)

        arrows.push(arrow)

        lastPos.x = innerWidth / 2;
        lastPos.y = CONST.FLOOR - 10;
        waiting = true;
        mouseLock = true;
    }

})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})




let myImage = new Image();
myImage.src = './assets/bow.png'
// myImage.onload = function() { drawBow();} I

function drawBow(x, y) {
    c.save();
    let mD = drag.mousedown ? 109 : 0
    let sX = ((Math.floor((1119 * drag.vel / 100) / 109) * 109) + mD)
    let sY = (sX > 545 ? 140 : 0)
    sX = sX % 654
    c.translate(x + 109 / 2, y + 140 / 2);
    c.rotate(-drag.degs * Math.PI / 180);
    c.drawImage(myImage, sX, sY, 109, 140, -109 / 2, -140 / 2, 109, 140)
    c.restore();
}

const mouseDrag = c => {
    let x = mouse.x;
    let y = mouse.y;
    let dist = utils.distance(drag.x, drag.y, x, y);

    let theta = utils.angle(drag.x, drag.y, x, y)
    let degs = utils.angle(x, y, drag.x, drag.y);
    degs *= -180 / Math.PI
    if (dist > drag.max) {
        // Math.pow(drag.max, 2)
        x = drag.x + drag.max * Math.cos(theta)
        y = drag.y + drag.max * Math.sin(theta)
        dist = drag.max
    }
    let vel = (dist / drag.max) * 100
    c.beginPath()
    c.moveTo(drag.x, drag.y)
    c.lineTo(x, y)
    c.strokeStyle = "black"
    c.stroke()
    c.closePath();
    c.fillStyle = "black"
    c.fillText(Math.round(100 * degs) / 100, drag.x, drag.y)
    c.fillText(Math.round(100 * vel) / 100, x, y)

    drag.degs = degs
    drag.vel = vel
    drag.theta = theta

}

class Menu {

    static handleClick(x, y) {
        if (x > innerWidth / 2 - 150 && x < innerWidth / 2 - 150 + 300 &&
            y >= innerHeight / 2 - 60 && y < innerHeight / 2) {

            setTimeout(() => {
                if (showMenu) {
                    showMenu = false;
                } else if (over) {
                    over = false;
                    init();

                }
            }, 200)

        }
    }
    
    static over(c) {
        finalScoreElement.innerHTML = points;
        mainMenu.style.display = "none";
        overMenu.style.display = "flex";
        modal.style.display = "flex";
    }
}

const resetHud = () => {
    c.translate(translated.x, translated.y)
    translated.x = 0
    translated.y = 0
    hudX = innerWidth / 2;
    mouseLock = false;
}

const createMountainRange = (mountainAmount, height, color) => {
    for (let i = 0; i < mountainAmount; i++) {
        const mountainWidth = innerWidth / mountainAmount;
        const x = hudX - (1000+ hudX/(100/(i+1)));
        c.beginPath();
        c.moveTo(x + i * mountainWidth, CONST.FLOOR);
        c.lineTo(x + i * mountainWidth + mountainWidth, CONST.FLOOR);
        c.lineTo(x + i * mountainWidth + mountainWidth / 2, CONST.FLOOR - height)
        c.lineTo(x + i * mountainWidth, CONST.FLOOR)
        const backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight)
        backgroundGradient.addColorStop(1, color)
        backgroundGradient.addColorStop(0, 'rgba(255,255,255, 1)')
        c.fillStyle = backgroundGradient;
        // c.stroke();
        c.fill()
        c.closePath();
    }
}


let showMenu = true;
let over = false;
// Animation Loop
function animate() {
    c.clearRect(translated.x, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)

    // Sky
    c.beginPath()
    const backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight)
    backgroundGradient.addColorStop(0, 'rgba(115, 175, 246, .8)')
    backgroundGradient.addColorStop(1, 'rgba(255,255,255, .4)')
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, CONST.WORLD_X, CONST.FLOOR)
    // c.fill()
    c.closePath()

    // Mountains
    createMountainRange(1, 300, 'rgba(115, 175, 246, .2)');
    createMountainRange(2, 250, 'rgba(115, 175, 246, 1)');
    createMountainRange(3, 100, 'rgba(115, 175, 246, 1)');


    // Ground
    c.beginPath()
    c.rect(0, CONST.FLOOR, CONST.WORLD_X, 300)
    c.fillStyle = 'rgba(97, 51, 21, 1)'
    c.fill()
    c.closePath()

    // Foliage
    trees.forEach(tree => tree.draw(c))

    // Ranges
    c.fillText(`Target Ranges:`, 50, 150)

    ranges.forEach((range, i) => {
        const y = ((i + 1) * 50) + 150
        c.fillText(`${Math.round(range/100)} M`, 200, y)
    })

    if (over) {
        over = true;
        Menu.over(c)
    }

    let deltaX = 0
    let deltaY = 0
    if (arrow && arrow.x > innerWidth / 2 && arrow.landed === false) {

        deltaX = arrow.x - lastPos.x
        deltaY = arrow.y - lastPos.y
        translated.x += deltaX
        lastPos.x = arrow.x

        distance = arrow.x

    } else if (arrow && arrow.landed !== false) {
        setTimeout(() => {
            resetHud();
            if (numArrows <= 0) over = true;
        }, 2000)

        hudX = arrow.x;
        waiting = false;
        arrow = null;
    }

    c.translate(-deltaX, 0)


    // HUD Text
    c.beginPath()
    c.fillStyle = "black"
    c.strokeStyle = 'rgba(0,0,0,1)'
    c.font = "30px Arial";

    // Scanning Text
    if (waiting) {
        hudX = arrow ? Math.max(arrow.x, innerWidth / 2) : innerWidth / 2
    }
    // Distance
    c.fillText(`${Math.round(distance/100)} M`, hudX, 50)
    // Score
    c.fillText(`${points} Points`, hudX + innerWidth / 4, 50)
    // Remaining arrows
    c.fillText(`${numArrows} Arrows`, hudX - innerWidth / 4, 50)

    c.stroke()
    c.closePath()

    points = 0;
    targets.forEach(target => {
        target.update(c)
    })
    arrows.forEach(arrow => {
        points += arrow.hitValue;
        arrow.update(c, targets)
    })
    drawBow(innerWidth / 10, CONST.FLOOR - 200, )

    if (drag.mousedown) {
        mouseDrag(c)
    }
}

init()
animate()