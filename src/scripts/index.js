import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

console.log('Hello Coders! :)');

const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('active')
})



