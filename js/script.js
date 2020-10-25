let images = document.querySelectorAll('.infinity-slider .img-wrapper');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');
}

// document.querySelector('.infinity-slider').onclick = slider;
let btnNext = document.querySelector('.btn-infinity-next').onclick = function() {
if (current + 1 == images.length) {
  current = 0;
}
else{
  current++;
}
  slider();
};

let btnPrew = document.querySelector('.btn-infinity-prew').onclick = function() {
  if (current - 1 == -1) {
    current = images.length - 1;
  }
  else{
    current--;
  }
    slider();
  };




