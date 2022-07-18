// let expand = document.querySelector(".expand");
// let files = document.querySelector(".files");
// expand.addEventListener("click", () => {
//   files.classList.toggle("flex-wrap");
// });

let switcher = document.querySelector(".navbar-switch");
let menu = document.querySelector("aside.menu");
let mainContent = document.querySelector(".main-content");
let switcherIcon = document.querySelector(".navbar-switch svg");
switcher.addEventListener("click", () => {
  mainContent.classList.toggle("open");
  menu.classList.toggle("open");
  switcherIcon.classList.toggle("rotate");
});

window.onload = function () {
  if (window.innerWidth <= 992) {
    menu.classList.remove("open");
    mainContent.classList.add("open");
  } else {
    menu.classList.add("open");
    mainContent.classList.remove("open");
  }
};
window.on;
window.onresize = function () {
  if (window.innerWidth <= 992) {
    menu.classList.remove("open");
    mainContent.classList.add("open");
  } else {
    menu.classList.add("open");
    mainContent.classList.remove("open");
  }
};
