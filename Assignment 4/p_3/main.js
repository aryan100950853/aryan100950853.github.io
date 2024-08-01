/**
 * Name: AryanKumar Panchal

   File: main.js

   Date: 2024/08/01
  
  The JavaScript file is devoted to the animation of the icons 
  as bouncing balls, which is initiating the canvas, defining 
  the context, creating and utilizing the Ball class, and creating 
  25 animated balls. Regarding the management of ball positions and
   the need to control for collisions, it employs the loop() which 
   provides a smooth animation using the requestAnimationFrame() 
   while changing colors every time they collide.
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
