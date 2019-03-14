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

### Technologies
* Vanilla Javascript for game logic and overall structure
* `HTML5 Canvas` for rendering

## Implementation Timeline
### Day 1:
* [ ] Setup `Node.js`, `webpack.config.js`, `package.json`, entry file
* [ ] Learn basics of canvas
### Day 2:
* [ ] Implement a click draggable velocity vector
* [ ] Use velocty vector to propel a object
### Day 3:
* [ ] Scrolling of game view to follow object horizontally downrange
* [ ] Targets to be hit by arrow object
### Day 4:
* [ ] Pitching of arrow as it is affected by gravity
* [ ] A Small avatar marskman that adjusts bow dpending on angle of velocty vector
* [ ] Scoring on target hits, track score in top left
### Day 5:
* [ ] Sounds for releasing of arrow, hitting ground, and hitting target
* [ ] Game menu

