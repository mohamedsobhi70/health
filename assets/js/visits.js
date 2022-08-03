
document.querySelectorAll(".popup-open").forEach((item) =>
  item.addEventListener("click", function () {
    this.parentElement.querySelector(".popup").classList.toggle("d-none");
  })
);
// open popup
document.querySelector(".add-newbtn").addEventListener("click", () => {
  document.querySelector(".new-patient").classList.add("show");
});

// close popup
document.querySelector(".new-patient .close").addEventListener("click", () => {
  document.querySelector(".new-patient").classList.remove("show");
});

// check if input is open or not
let patientItemsinput = document.querySelectorAll(".patient-item input");
patientItemsinput.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.checked == true) {
      console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.classList.add("selected");
      this.parentElement.parentElement
        .querySelector(".patient-select")
        .classList.remove("d-none");
    } else {
      this.parentElement.parentElement.classList.remove("selected");
      this.parentElement.parentElement
        .querySelector(".patient-select")
        .classList.add("d-none");
    }
  })
);
