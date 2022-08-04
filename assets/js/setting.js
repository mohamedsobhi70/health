let primaryColor = document.querySelector("input.primary-color");
let secondaryColor = document.querySelector("input.secondary-color");
let bgColor = document.querySelector("input.bg-color");

// primary color 
primaryColor.addEventListener("change", function (e) {
  document.documentElement.style.setProperty("--primary-color", e.target.value);
  localStorage.setItem("--primary-color", e.target.value);
});
// secondary color 
secondaryColor.addEventListener("change", function (e) {
  document.documentElement.style.setProperty("--secondary-color", e.target.value);
  localStorage.setItem("--secondary-color", e.target.value);
});
// background color 
bgColor.addEventListener("change", function (e) {
  console.log(e.target);
  document.documentElement.style.setProperty("--bg-color", e.target.value);
  localStorage.setItem("--bg-color", e.target.value);
});
