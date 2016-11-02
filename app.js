'use strict';

var i = 0;
var j = 0;
var imageSpot1;
var imageSpot2;
var imageSpot3;
var counter = 0
var imageArray = [];

function maths() {
  Math.floor(Math.random * imageArray.length);
}

function imagePicker() {
  var imageSpot1 = imageArray[maths()];
  var imageSpot2 = imageArray[maths()];
  var imageSpot3 = imageArray[maths()];
  if ((imageSpot1 === imageSpot2) || (imageSpot1 === imageSpot3) || (imageSpot2 === imageSpot3 )) {
    imagePicker();
  } else {
    imageSpot1.shown ++;
    imageSpot2.shown ++;
    imageSpot3.shown ++;
    imageSpot1.setAttribute('class', 'image');
    imageSpot2.setAttribute('class', 'image');
    imageSpot3.setAttribute('class', 'image');
  }
}

function ImageConstructor(src, id) {
  this.setAttribute('src', src);
  this.setAttribute('id', id);
  this.setAttribute('class', 'hiddenimage');
  this.clicks = 0;
  this.shown = 0;
  imageArray[j] = this;
  j++;
}
function HtmlConstructor (tag, type, id, clas) {
  this.document.createELement(tag);
  this.setAttribute('type', type);
  this.setAttribute('id', id);
  this.setAttribute('class', clas);
}
var p = new HtmlConstructor('p', 'text', 'closer', 'text');
p.innerText = 'You have completed the questionaire! Thanks your time!';
function imageCycle (){
  if (counter < 25) {
    scoreLog();
    imageClear();
    imagePicker();
    counter++;
  } else {
    imageClear();
  }
}

function scoreLog () {
  this.clicks ++;

}
function imageClear () {
  imageSpot1.setAttribute('class', 'hiddenimage');
  imageSpot2.setAttribute('class', 'hiddenimage');
  imageSpot3.setAttribute('class', 'hiddenimage');
}
document.getElementsByClassName('image').addEventListener('click',imageCycle())
