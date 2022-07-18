let addPatientBtn = document.querySelector(".add-patient-btn");
let newPatient = document.querySelector(".new-patient");
let newPatientClose = document.querySelector(".new-patient .close");
let filter = document.querySelector(".filter-icon");
let filterOptions = document.querySelector(".filter-options");
filter.addEventListener("click", () => {
  console.log("fpdoklejfgijree");
  filterOptions.classList.toggle("d-none");
});

addPatientBtn.addEventListener("click", () => {
  newPatient.classList.add("show");
});

newPatientClose.addEventListener("click", () => {
  newPatient.classList.remove("show");
});
