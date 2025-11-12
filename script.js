// Fade-in on scroll
const sections=document.querySelectorAll(".fade-section");
window.addEventListener("scroll",()=>{sections.forEach(s=>{const r=s.getBoundingClientRect();if(r.top<window.innerHeight-100)s.classList.add("visible");});});

// Mobile menu
const menu=document.getElementById("menu-toggle");
const nav=document.querySelector(".nav");
if(menu){menu.addEventListener("click",()=>nav.classList.toggle("active"));}

// Language switch
const langButtons=document.querySelectorAll(".lang-switch button");
let currentLang=localStorage.getItem("lang")||"ja";
async function loadLang(lang){const res=await fetch("lang.json");const data=await res.json();applyLang(data[lang]);localStorage.setItem("lang",lang);}
function applyLang(texts){document.querySelectorAll("[data-key]").forEach(el=>{const key=el.getAttribute("data-key");if(texts[key])el.innerHTML=texts[key];});}
langButtons.forEach(btn=>{btn.addEventListener("click",()=>{const t=btn.textContent.trim();const lang=t==="日本語"?"ja":t==="EN"?"en":t==="ES"?"es":"ur";loadLang(lang);});});
loadLang(currentLang);
