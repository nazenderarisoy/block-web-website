// JavaScript Document
console.log("hi");

// constanten
const openMenuButton = document.querySelector("header nav:nth-of-type(1) button");
const deNav = document.querySelector("header nav:nth-of-type(2)");
const sluitMenuButton = document.querySelector("header nav:nth-of-type(2) button");

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