import './components/componetList.js'
import 'regenerator-runtime'; 
import '../styles/main.scss';
import data from '/src/public/data/DATA.json';
import Utils from './untility.js';

window.addEventListener("DOMContentLoaded", async () => {
  let getdata = await data.restaurants;
  await renderData(getdata);
});

async function renderData(data){
  const listExplore = await document.querySelector(".slider-container")
  if (!listExplore) {
    console.error("Element '.slider-container' tidak ditemukan.");
    return;
  }

  let dataCard= await data.map((dt)=>{
    console.log(dt)
    const elmn= document.createElement("card-item")
    elmn.data= dt
    return elmn
  })
  await Utils.emptyElemnt(listExplore)
  await listExplore.append(...dataCard)
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

