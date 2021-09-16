import "../scss/style.scss";

const toggleMenu = document.getElementById("hamburger");
const subMenu = document.getElementById("sub-navigation");

toggleMenu.addEventListener('click', (e) => {
  toggleMenu.classList.toggle("open")
  subMenu.classList.toggle("open");
})
