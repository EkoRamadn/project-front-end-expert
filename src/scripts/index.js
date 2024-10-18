import './components/componetList.js'
import 'regenerator-runtime'; 
import '../styles/main.scss';
import data from '/src/public/data/DATA.json';
import Utils from './untility.js';

window.addEventListener("DOMContentLoaded",  () => {
  let getdata =  data.restaurants;
   renderData(getdata);
});

 function renderData(data){
  const listExplore = document.querySelector(".slider-container")
  if (!listExplore) {
    console.error("Element '.slider-container' tidak ditemukan.");
    return;
  }

  let dataCard= data.map((dt)=>{
    console.log(dt)
    const elmn= document.createElement("card-item")
    elmn.data= dt
    return elmn
  })
   Utils.emptyElemnt(listExplore)
   listExplore.append(...dataCard)
}




const menuBtn = document.querySelector(".menu-btn")
const menuList = document.querySelector(".nav-container")
const panel = document.querySelector(".panel")

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('active')
  menuList.classList.toggle("active")
  panel.classList.toggle("active")
  document.body.classList.toggle("active")
})

panel.addEventListener("click",()=>{
  menuBtn.classList.remove('active')
  menuList.classList.remove("active")
  panel.classList.remove("active")
  document.body.classList.remove("active")
})

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
});

