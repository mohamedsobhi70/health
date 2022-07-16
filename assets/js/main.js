let expand = document.querySelector(".expand");
let files = document.querySelector(".files");
expand.addEventListener("click", () => {
  files.classList.toggle("flex-wrap");
});
