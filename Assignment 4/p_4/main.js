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
