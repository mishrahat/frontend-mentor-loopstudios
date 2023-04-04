const menu_on = document.querySelector(".mobile-menu-on");
const menu_off = document.querySelector(".menu-close");

const clicked = (e) => {
  e.preventDefault();
  document.querySelector(".menubar").style.display = "block";
};

menu_on.addEventListener("click", clicked);
menu_off.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menubar").style.display = "none";
});
