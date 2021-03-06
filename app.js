'use strict';

var counter = 0
var imageArray = [];
var imgHtmlArray = [];
var numbers = [];
var barChartImageArrayPercent = [];
var barChartImageArrayName = [];
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
  this.percent = productInfo.percent || 0;
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
  numbers = [];
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
    left.addEventListener('click', leftClick);
    center.addEventListener('click',centerClick);
    right.addEventListener('click', rightClick);
  }
}
function leftClick() {
  counter++;
  console.log('counter: ' + counter);
  if (counter < 25) {
    imageArray[numbers[0]].clicks++;
    removeChildren();
    left.removeEventListener('click', leftClick);
    imagePicker();
  } else {
    left.removeEventListener('click', leftClick);
    removeChildren();
    counter++;
    tableCreator();
  }
}
function centerClick() {
  counter++;
  if (counter < 25) {
    imageArray[numbers[1]].clicks++;
    removeChildren();
    center.removeEventListener('click', centerClick);
    imagePicker();
  } else {
    center.removeEventListener('click', centerClick);
    removeChildren();
    counter++;
    tableCreator();
  }
}

function rightClick() {
  counter++;
  if (counter < 25) {
    imageArray[numbers[2]].clicks++;
    removeChildren();
    right.removeEventListener('click', rightClick);
    imagePicker();
  } else {
    right.removeEventListener('click', rightClick);
    removeChildren();
    counter++;
    tableCreator();
  }
}
var p = document.createElement('p');
p.innerText = 'You have completed the questionaire! Thanks your time!';
function tableCreator() {
  var table = document.createElement('table');
  table.setAttribute('class', 'scoreTable');
  // var body = document.getElementsByTagName('body');
  document.body.appendChild(table);
  var trLabels = document.createElement('tr');
  table.appendChild(trLabels);
  var td = document.createElement('td');
  td.innerText = 'Items: ';
  trLabels.appendChild(td);
  for (var i = 0; i < imageArray.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('class', 'nameRow')
    td.innerText = imageArray[i].name;
    trLabels.appendChild(td);
  }
  var tr = document.createElement('tr');
  tr.setAttribute('class', 'topRow');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.innerText = 'Times Shown: ';
  tr.appendChild(td);
  for (var i = 0; i < imageArray.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('class', 'timesShown');
    td.innerText = imageArray[i].shown;
    tr.appendChild(td);
  }
  var tr2 = document.createElement('tr');
  tr2.setAttribute('class', 'botRow');
  table.appendChild(tr2);
  var td = document.createElement('td');
  td.innerText = 'Times Clicked: ';
  tr2.appendChild(td);
  for (var i = 0; i < imageArray.length; i++) {
    var td2 = document.createElement('td');
    td2.setAttribute('class', 'timesClicked');
    td2.innerText = imageArray[i].clicks;
    tr2.appendChild(td2);
  }
  pruneImageArray();
}
function percentCalc() {
  for (var i = 0; i < imageArray.length; i++) {
    imageArray[i].percent = imageArray[i].clicks / imageArray[i].shown * 100;
    console.log('percentCalc ' + i + ': ' + imageArray[i].percent);
  }
}
function sortImageArray() {
  imageArray.sort(function (a, b) {
    if (a.percent > b.percent) {
      return -1;
    }
    if (a.percent < b.percent) {
      return 1;
    }
    return 0;
  });
}

function pruneImageArray() {
  percentCalc();
  sortImageArray();
  for (var i = 0; i < 5; i++) {
    barChartImageArrayPercent.push(imageArray[i].percent);
    barChartImageArrayName.push(imageArray[i].name);
  }
  console.log('Percent: ' + barChartImageArrayPercent);
  barChartCreator();
}

function barChartCreator() {
  var barChart = document.getElementById('barChart').getContext('2d');
  var myChart = new Chart(barChart, {
    type: 'bar',
    data: {
      labels: barChartImageArrayName,
      datasets: [{
        label: [],
        data: barChartImageArrayPercent,
        backgroundColor: '#286bd6',
        borderColor: '#154187',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  });
}
imagePicker();
