/**
 * Name : Aryankuamar panchal 
 * Date : 2024/07/31
 * File type : .Js 
 * Description : Assignment 4 JavaScript File for the Silly story generator.
 */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}