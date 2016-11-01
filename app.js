'use strict';

/* Goals are to create a image clicking app that shows 3 random pictures from the asset bank and logs those clicks.
I will need to set ID's for the images and using a constructor function. Then I will need to push these objects into an array. After which I will need to create a math function that grabs 3 random values from a designated limit and compares them with if statements. I will need to use this function to call random images in the previously described array. Each image that is rendered to the HTML will need to have the eventListener waiting for a click that logs the which image was clicked, which images were not, clear the images, and begin another iteration of 3 varying images. This process repeats until 25 iterations have been completed. The catch to this assignment is that when the 3 random images are called they cannot be the same images.
sample thought code

var j = 0;
var imageArray = [];
function maths() {
 return Math.floor(Math.random * imageArray.length)
}

Realized that after barking up several wrong trees on how to tackle the whole no repeating image in the set of three I would have kept making if statements forever and I couldn't think of a plausible means of temporarily removing images from the array then adding them back into the array. So I just made a recursive function which in theory should work. As all famous last words go.

function imagePicker() {
  var x = imageArray[(maths()];
  var y = imageArray[(maths()];
  var z = imageArray[(maths()];
  if ((x === y) || (x === z) || (y === z)) {
    imagePicker();
  }
}

Obviously this is just vague placeholder code that won't work for the scenario. I will need to make an eventListener function that waits on the image clicks then increments the counter. So a while loop seems better for this situation.

function twentyfive () {
  for (var i = 0; i < 25; i++) {
  imagePicker();
  }
}
function imageConstructor(src, id, class) {
  this.setAttribute('src', src);
  this.setAttribute('id', id);
  this.setAttribute('class', class);
  imageArray[j] = this;
  j++;
}
function htmlConstructor (tag, type, id, class) {
  this.document.createELement(tag);
  this.setAttribute('type', type);
  this.setAttribute('id', id);
  this.setAttribute('class', class);
}
*/
