/*
Name : AryanKumar Panchal

Date : 2024/08/01

File: main.js

This JavaScript file is involved in the animation of bouncing balls 
through creating the canvas and the drawing context. It contains 
procedures to produce random numbers and colors, and declares a 
`Ball` class appropriate to control for an individual ball. 
This pseudo code used the script to generate numerous balls 
and assigns random properties to the ball it then animates 
the ball for a certain amount of time. The `draw()`, `update()`, 
and `collisionDetect()` functions have the responsibility of 
displaying, moving, and changing color upon collisions. It is 
managed with the help of the `requestAnimationFrame()` function.
*/
// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// Shape class
class Shape {
  constructor(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
  }
}

// Ball class
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
      super(x, y, velX, velY);
      this.color = color;
      this.size = size;
      this.exists = true;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

update() {
    if ((this.x + this.size) >= width) {
        this.velX = -this.velX;
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -this.velX;
    }
    if ((this.y + this.size) >= height) {
        this.velY = -this.velY;
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
}

collisionDetect() {
    for (const ball of balls) {
        if (!(this === ball) && ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
            }
        }
    }
}
}
