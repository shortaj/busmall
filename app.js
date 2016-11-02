'use strict';

var i = 0;
var j = 0;
var imageSpot1;
var imageSpot2;
var imageSpot3;
var counter = 0
var imageArray = [];

function maths() {
  return Math.floor(Math.random()* imageArray.length);
}
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

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
    left.appendChild(imageSpot1);
    center.appendChild(imageSpot2);
    right.appendChild(imageSpot3);
  }
}

var bag = new ImageConstructor('bag.jpg', '1');
var banana = new ImageConstructor('banana.jpg', '2');
var bathroom = new ImageConstructor('bathroom.jpg', '3');
var boots = new ImageConstructor('boots.jpg', '4');
var breakfast = new ImageConstructor('breakfast.jpg', '5');
var bubblegum = new ImageConstructor('bubblegum.jpg', '6');
var chair = new ImageConstructor('chair.jpg', '7');
var cthulhu = new ImageConstructor('cthulhu.jpg', '8');
var dogDuck = new ImageConstructor('dog-duck.jpg', '9');
var dragon = new ImageConstructor('dragon.jpg', '10');
var pen = new ImageConstructor('pen.jpg', '11');
var petSweep = new ImageConstructor('pet-sweep.jpg', '12');
var scissors = new ImageConstructor('scissors.jpg', '13');
var shark = new ImageConstructor('shark.png', '14');
var sweep = new ImageConstructor('sweep.jpg', '15');
var tauntaun = new ImageConstructor('tauntaun.jpg', '16');
var unicorn = new ImageConstructor('unicorn.jpg', '17');
var usb = new ImageConstructor('usb.gif', '18');
var waterCan = new ImageConstructor('water-can.jpg', '19');
var wineGlass = new ImageConstructor('wine-glass.jpg', '20');


function ImageConstructor(src, id) {
  var picture = document.createElement('img')
  picture.setAttribute('src', ('img/' + src));
  picture.setAttribute('id', id);
  picture.setAttribute('class', 'hiddenimage');
  picture.clicks = 0;
  picture.shown = 0;
  imageArray[j] = picture;
  j++;

}
function HtmlConstructor (tag, type, id, clas) {
  var html = document.createElement(tag);
  html.setAttribute('type', type);
  html.setAttribute('id', id);
  html.setAttribute('class', clas);
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
imagePicker();
document.getElementsByClassName('image').addEventListener('click',imageCycle(event));
