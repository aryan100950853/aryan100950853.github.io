/*

         Name: Aryankumar Panchal

         File: mail.js

         Date: 2024/07/31

         This JavaScript file creates an image gallery when the thumbnail images are clicked, 
         the images displayed in a larger box change. It also entails operations for the button 
         that switches the opacity between the darker and lighter version of the overlay on 
         the shown image for an aesthetic feature. The thumbnails are created using PHP where 
         there is a predefined list of images and their corresponding alt tags to display as 
         thumbnails and the process of making the image darker or lighter is under the button 
         and disabled/enabled by adding class and style to the button.

*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
// Array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Object for alternative text
const altText = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Scenic view of mountains',
  'pic3.jpg': 'Closeup of a flower',
  'pic4.jpg': 'Beautiful sunset over the ocean',
  'pic5.jpg': 'Cityscape with tall buildings'
};
/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
