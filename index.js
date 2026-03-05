/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const m="https://paw-hut.b.goit.study/api",c=document.getElementById("pets-list"),p=document.getElementById("filter-list"),l=document.getElementById("load-more");document.getElementById("loader");let a=1,d="";const g=()=>window.innerWidth>=1440?9:8;async function y(){try{const s=await(await fetch(`${m}/categories`)).json();let i='<li><button type="button" class="filter-btn active" data-id="">Всі</button></li>';i+=s.map(e=>`<li><button type="button" class="filter-btn" data-id="${e._id}">${e.name}</button></li>`).join(""),p.innerHTML=i}catch(r){console.error("Помилка завантаження категорій:",r)}}async function u(r=1,s=""){const i=g();let e=`${m}/animals?page=${r}&limit=${i}`;s&&s!==""&&(e+=`&categoryId=${s}`);try{const n=await(await fetch(e)).json(),o=n.animals||[],f=n.totalItems||0;h(o,r===1),c.children.length>=f||o.length===0?l.style.display="none":l.style.display="block"}catch(t){console.error("Помилка завантаження тварин:",t)}}function h(r,s){const i=r.map(e=>`
    <li class="pet-card">
      <picture class="pet-img-thumb">
        <source srcset="${e.image}" media="(min-width: 320px)">
        <img src="${e.image}" alt="${e.name}" class="pet-img" loading="lazy">
      </picture>
      <div class="pet-content">
        <p class="pet-species">${e.species}</p>
        <h3 class="pet-name">${e.name}</h3>
        <ul class="pet-tags">
          ${e.categories?e.categories.map(t=>`
            <li class="pet-tag">${t.name}</li>
          `).join(""):""}
        </ul>
        
      <div class="pet-meta">
          <span>${e.age}</span>  <span>${e.gender}</span>
          </div>
        </div>
          <div class="pet-descr">
        <p class="pet-short-desc">${e.shortDescription}</p>
        </div>
        <button type="button" class="learn-more-btn" data-id="${e._id}">Дізнатись більше</button>
      
    </li>
  `).join("");s?c.innerHTML=i:c.insertAdjacentHTML("beforeend",i)}p.addEventListener("click",async r=>{const s=r.target.closest(".filter-btn");s&&(document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),s.classList.add("active"),d=s.dataset.id,a=1,await u(a,d))});l.addEventListener("click",async()=>{a+=1,await u(a,d)});document.addEventListener("DOMContentLoaded",()=>{y(),u(1,"")});
//# sourceMappingURL=index.js.map
