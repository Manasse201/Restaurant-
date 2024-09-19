import { data } from "./data.js"

console.log(data);


const body = document.querySelector("body");
const contenair = document.querySelector(".contenair")
const main = document.getElementById("main");
const bol = document.querySelector(".img")
const header = document.querySelector("header")
const menuRepas = document.querySelector(".menu_repas");
const btn = document.querySelector(".rien");
const boxMenu = document.querySelector(".box-menu")
const commander = document.querySelectorAll(".commander")

btn.addEventListener("click", () => {
    main.style.display = "none"
    bol.style.display = "none"
    menuRepas.style.display = "flex"
    boxMenu.style.display = "grid";
})
    
let i = 0;

data.forEach(produit => {
    const newProduit = document.createElement("div")
    const contenuHTML = `
        <div class="menu-img">
                <img src="${produit.img}" alt="">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <button class="commander">Commander</button>
            </div>
    `
    newProduit.innerHTML = contenuHTML;
    console.log(contenuHTML);
    boxMenu.appendChild(newProduit)
});