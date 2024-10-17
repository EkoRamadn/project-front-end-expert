import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

console.log('Hello Coders! :)');

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function updateSliderPosition() {
  const cardWidth = document.querySelector('.card-container').offsetWidth;
  sliderContainer.style.transform = `translateX(-${index * (cardWidth + 32)}px)`; // 32px adalah gap antar kartu
}




