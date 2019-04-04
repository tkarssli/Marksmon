# Marksmon
A game where a little guy shoots arrows at targets

## Overview
Marksmon is a game where the objective is to drag veloctiy vector for a little man to shoot his arrow. The arrow is sent flying down the playfield and either hits or misses several targets downfield. The player has a finite number of arrows and after they have all been fired the player gets a final score of all their shots and misses. 

This game is inspired from a flash game classic called bowman which shares a similar concept, but the object is to do damage to another archer downfield instead of trying to score off targets. [Bowman Wiki](https://internetgames.fandom.com/wiki/Bowman_2)

## Functionality
* Users click and drag a velocity vector
* An arrow is fired using the provided veloctiy vector
* The arrow is affected by gravity as it travels down range
* Targets downrange give points if hit, the number of points changes based on distance
* The player gets a finite number of arrows, the game ends when they have all been fired.

### Gameplay
![Marksmon Gameplay](https://res.cloudinary.com/tkarssli/image/upload/v1554406161/marksmon.gif)

#### Arrow physics and hit detection
```js
update(c, targets){
  this.trailPoints.push({x: this.x, y:this.y, ttl: CONST.ARROW_TRAIL_TTL})
  let hit = false;
  this.hitValue = 0;

  targets.forEach( target => {
    if(this.targetHit(target)){
      hit = true;
      this.hitValue += target.value;
    }
  })

  const theta = Math.atan2 (this.dy,this.dx);
  if (Math.abs(theta) < .45 && Math.round(this.y) >= CONST.FLOOR && this.dy > 0){
    if(this.dy > 0){
      this.dy = -this.dy/1.5
      if(this.dy < .1 && this.dy > -.1){
        this.dy = 0
      }
    }
    this.dx = this.dx/1.2
  }else if( this.y >= CONST.FLOOR || hit){
    this.setLanded()
  } else {
    this.dx += (this.dx > 0) ? -.01 : 0
    this.dy += CONST.GRAVITY
  }
  
  this.x += this.dx
  this.y += this.dy;
  this.draw(c);
  this.hitBox.update(c)
}
```


The arrow update function handles all hit detection and physics. If the arrow hits the ground at a shallow enough angle the arrow deflects upwards and also loses 33% of its horizontal velocity. If the arrow is found to be in collision with a target it loses all velocity and does no longer is affected by gravity to simulate being stuck in a target.

#### Mouse drag velocity vector
```js
const mouseDrag = c => {
  let x = mouse.x;
  let y = mouse.y;
  let dist = utils.distance(drag.x, drag.y, x, y);

  let theta = utils.angle(drag.x, drag.y, x, y)
  let degs = utils.angle(x, y, drag.x, drag.y);
  degs *= -180 / Math.PI
  if (dist > drag.max) {
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
```
The initial velocity vector created by the player is turned into an object, and then passed into a new arrow. The line is constrained to a max length and the player is given visual indicators of how many degrees off the horizontal they are and what percentage of "power" they are about to release the arrow with.

### Technologies
* Vanilla Javascript for game logic and overall structure
* `HTML5 Canvas` for rendering
* Webpack to bundle scripts

#### Scripts
* `canvas.js`: entry file, main animation loop
* `arrow.js`: renders arrows and contains all physics and collsion detection
* `target.js`: render a target with specified location and value
* `collision_box`,`collision_sphere`: Extend `Collider` and are "hitboxes" or "hitcircles" which allow of simplified collision detection
* `sprite.js`: handles rendering of sprites

## Implementation Timeline
### Day 1:
* [x] Setup `Node.js`, `webpack.config.js`, `package.json`, entry file
* [x] Learn basics of canvas
### Day 2:
* [x] Implement a click draggable velocity vector
* [x] Use velocty vector to propel a object
### Day 3:
* [x] Scrolling of game view to follow object horizontally downrange
* [x] Targets to be hit by arrow object
### Day 4:
* [x] Pitching of arrow as it is affected by gravity
* [x] Scoring on target hits, track score in top left
### Day 5:
* [x] Game menu

#### Future Features
* Add power ups
* Implement sound effects
* Add a sprite person to shoot the bow
