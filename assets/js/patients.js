let addPatientBtn = document.querySelector(".add-patient-btn");
let newPatient = document.querySelector(".new-patient");
let newPatientClose = document.querySelector(".new-patient .close");
let filter = document.querySelector(".filter-icon");
let filterOptions = document.querySelector(".filter-options");
filter.addEventListener("click", () => {
  filterOptions.classList.toggle("d-none");
});

addPatientBtn.addEventListener("click", () => {
  newPatient.classList.add("show");
});

newPatientClose.addEventListener("click", () => {
  newPatient.classList.remove("show");
});

$(document).ready(function () {
  $("#patients-table1").DataTable({
    paging: false,
    ordering: true,
    info: false,
    dom: '<"pull-left"f><"pull-right"l>tip',
  });
});

document.querySelector(".btn-add-email").addEventListener("click", function () {
  console.log(this.parentElement);
  if (
    document
      .querySelector(".btn-add-email")
      .parentElement.querySelector("input").value !== ""
  ) {
    document.querySelector(".emails-field").innerHTML += `
    <p class="text-secondary m-0 fs-12">${
      document
        .querySelector(".btn-add-email")
        .parentElement.querySelector("input").value
    }</p>
    `;
  }
});

document.querySelector(".btn-add-mobile").addEventListener("click", function () {
  console.log(this.parentElement);
  if (
    document
      .querySelector(".btn-add-mobile")
      .parentElement.querySelector("input").value !== ""
  ) {
    document.querySelector(".mobiles-field").innerHTML += `
    <p class="text-secondary m-0 fs-12">${
      document
        .querySelector(".btn-add-mobile")
        .parentElement.querySelector("input").value
    }</p>
    `;
  }
});
