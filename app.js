'use strict';

var counter = 0
var imageArray = [];
var imgHtmlArray = [];
var numbers = [];
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var div = [left, center, right];
var initialProductInformation = [
  {
    filepath: 'img/bag.jpg',
    name: 'bag',
    class: 'image'
  },
  {
    filepath: 'img/banana.jpg',
    name:'banana',
    class: 'image'
  },
  {
    filepath: 'img/bathroom.jpg',
    name: 'bathroom',
    class: 'image'
  },
  {
    filepath: 'img/boots.jpg',
    name: 'boots',
    class: 'image'
  },
  {
    filepath:'img/breakfast.jpg',
    name: 'breakfast',
    class: 'image'
  },
  {
    filepath: 'img/bubblegum.jpg',
    name: 'bubblegum',
    class: 'image'
  },
  {
    filepath: 'img/chair.jpg',
    name: 'chair',
    class: 'image'
  },
  {
    filepath: 'img/cthulhu.jpg',
    name: 'cthulhu',
    class: 'image'
  },
  {
    filepath: 'img/dog-duck.jpg',
    name: 'dog-duck',
    class: 'image'
  },
  {
    filepath: 'img/dragon.jpg',
    name: 'dragon',
    class: 'image'
  },
  {
    filepath: 'img/pen.jpg',
    name: 'pen',
    class: 'image'
  },
  {
    filepath: 'img/pet-sweep.jpg',
    name: 'pet-sweep',
    class: 'image'
  },
  {
    filepath: 'img/scissors.jpg',
    name: 'scissors',
    class: 'image'
  },
  {
    filepath: 'img/shark.jpg',
    name: 'shark',
    class: 'image'
  },
  {
    filepath: 'img/sweep.png',
    name: 'sweep',
    class: 'image'
  },
  {
    filepath: 'img/tauntaun.jpg',
    name: 'tauntaun',
    class: 'image'
  },
  {
    filepath: 'img/unicorn.jpg',
    name: 'unicorn',
    class: 'image'
  },
  {
    filepath: 'img/usb.gif',
    name: 'usb',
    class: 'image'
  },
  {
    filepath: 'img/water-can.jpg',
    name: 'water-can',
    class: 'image'
  },
  {
    filepath: 'img/wine-glass.jpg',
    name: 'wine-glass',
    class: 'image'
  }
];

for (var i = 0; i < initialProductInformation.length; i++) {
  new Product(initialProductInformation[i]);
}
function Product(productInfo) {
  this.clicks = productInfo.clicks || 0;
  this.shown = productInfo.shown || 0;
  this.filepath = productInfo.filepath;
  this.name = productInfo.name;
  this.class = productInfo.class;
  imageArray.push(this);
}
function removeChildren() {
  left.innerHTML = '';
  center.innerHTML = '';
  right.innerHTML = '';
}
function maths() {
  var number1 = parseInt(Math.random()* imageArray.length);
  var number2 = parseInt(Math.random()* imageArray.length);
  var number3 = parseInt(Math.random()* imageArray.length);
  return [number1, number2, number3];
}

function imagePicker() {
  var numbers = [];
  numbers = maths();
  if ((imageArray[numbers[0]] === imageArray[numbers[1]]) || (imageArray[numbers[0]] === imageArray[numbers[2]]) || (imageArray[numbers[1]] === imageArray[numbers[2]] )) {
    imagePicker();
  } else {
    for (var i = 0; i < numbers.length; i++) {
      imageArray[numbers[i]].shown ++;
      imgHtmlArray[i] = document.createElement('img');
      imgHtmlArray[i].setAttribute('src', imageArray[numbers[i]].filepath);
      imgHtmlArray[i].setAttribute('name', imageArray[numbers[i]].name);
      imgHtmlArray[i].setAttribute('class', imageArray[numbers[i]].class);
      div[i].appendChild(imgHtmlArray[i]);
    }
    left.addEventListener('click', function leftClick(event) {
      if (counter < 25) {
        imageArray[numbers[0]].clicks++;
        counter++;
        removeChildren();
        left.removeEventListener('click', leftClick);
        imagePicker();
      } else {
        left.removeEventListener('click', leftClick);
        removeChildren();
      }
    });
    center.addEventListener('click', function centerClick(event) {
      if (counter < 25) {
        imageArray[numbers[1]].clicks++;
        counter++;
        removeChildren();
        center.removeEventListener('click', centerClick);
        imagePicker();
      } else {
        center.removeEventListener('click', centerClick);
        removeChildren();
      }
    });
    right.addEventListener('click', function rightClick(event) {
      if (counter < 25) {
        imageArray[numbers[2]].clicks++;
        counter++;
        removeChildren();
        right.removeEventListener('click', rightClick);
        imagePicker();
      } else {
        right.removeEventListener('click', rightClick);
        removeChildren();
      }
    });
  }
}

function HtmlConstructor (tag, type, id, clas) {
  var html = document.createElement(tag);
  html.setAttribute('type', type);
  html.setAttribute('id', id);
  html.setAttribute('class', clas);
}
var p = new HtmlConstructor('p', 'text', 'closer', 'text');
p.innerText = 'You have completed the questionaire! Thanks your time!';
imagePicker();
