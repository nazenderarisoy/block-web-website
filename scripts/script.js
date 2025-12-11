// JavaScript Document
console.log("hi");

// constanten
const openMenuButton = document.querySelector("header nav button");
const deNav = document.querySelector("header nav");
const sluitMenuButton = document.querySelector("header nav button");

// functies
function openMenu() {
    deNav.classList.add("is-open");
} 
  
function sluitMenu() {
    deNav.classList.remove("is-open");
}
  
// eventlisteners
openMenuButton.onclick = openMenu;
sluitMenuButton.onclick = sluitMenu;