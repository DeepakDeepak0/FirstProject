const menuBar = document.querySelector("#menu-bar");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('active');
})