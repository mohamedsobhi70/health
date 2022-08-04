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
  document.documentElement.style.setProperty(
    "--primary-color",
    localStorage.getItem("--primary-color") || "#018e9f"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    localStorage.getItem("--secondary-color") || "#8E8769"
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    localStorage.getItem("--mg-color") || "#f1f3f9"
  );

};
window.onresize = function () {
  if (window.innerWidth <= 992) {
    menu.classList.remove("open");
    mainContent.classList.add("open");
  } else {
    menu.classList.add("open");
    mainContent.classList.remove("open");
  }
};
