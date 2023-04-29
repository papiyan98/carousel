'use strict';

const carousel = document.querySelector('.carousel');

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

/* configuration */
const width = parseInt(getComputedStyle(listElems[0]).width); // item width
const count = 1; // visible items count

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, - width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};