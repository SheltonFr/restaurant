(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=()=>{const e=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(()=>{a.classList.contains("active")||(n(a),function(){const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="imgs/chef.png",n.alt="Chef",e.appendChild(t("Best Pizza in your country")),e.appendChild(t("Made with passion since 1900")),e.appendChild(n),e.appendChild(t("Order online or visit us!")),e}())}())}));const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Menu",c.addEventListener("click",(()=>{c.classList.contains("active")||n(c)}));const s=document.createElement("button");return s.classList.add("button-nav"),s.textContent="Home",s.addEventListener("click",(()=>{s.classList.contains("active")||n(s)})),e.appendChild(a),e.appendChild(c),e.appendChild(s),e},n=t=>{document.querySelectorAll(".button-nav").forEach((e=>{e!==t&&e.classList.remove("active")})),t.classList.add("active")};!function(){const t=document.querySelector(".content");t.appendChild((()=>{const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="PizzaHouse",t.appendChild(n),t.appendChild(e()),t})()),t.appendChild((()=>{const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t})()),t.appendChild((()=>{const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright ©️ ${(new Date).getFullYear()} Shelton Francisco`;const n=document.createElement("a");n.href="https://github.com/sheltonfr/",n.target="_blank";const a=document.createElement("i");return a.setAttribute("class","fab fa-github"),n.appendChild(a),t.appendChild(e),t.appendChild(n),t})())}()})();