let addPatientBtn = document.querySelector(".add-patient-btn");
let newPatient = document.querySelector(".new-patient");
let newPatientClose = document.querySelector(".new-patient .close");
let filter = document.querySelector(".filter-icon");
let filterOptions = document.querySelector(".filter-options");
let addCondition = document.querySelector(".add-condition");
let filtersSection = document.querySelector(".filter-options .filters-rows");
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
  document.querySelector(
    "#patients-table1_filter"
  ).firstChild.firstChild.textContent = "";
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

document
  .querySelector(".btn-add-mobile")
  .addEventListener("click", function () {
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

addCondition.addEventListener("click", () => {
  filtersSection.innerHTML += `
  <div class="d-flex align-items-center mb-1">
  <div class="w-25 px-4">
      <span class="border m-0 p-2">And <i class="fa fa-chevron-down ml-3"></i></span>
  </div>
  <div class="w-75 d-flex p-1 border-3 border-warning br-5">
      <span class="border m-0 p-2">Criteria <i
              class="fa fa-chevron-down ml-3"></i></span>
      <span class="border m-0 p-2">Contains <i
              class="fa fa-chevron-down ml-3"></i></span>
      <span class="border m-0 p-2">Enter Value <i
              class="fa fa-chevron-down ml-3"></i></span>
      <span class="border m-0 p-2">
          <svg id="trash_1_" data-name="trash (1)" xmlns="http://www.w3.org/2000/svg"
              width="12.787" height="15.738" viewBox="0 0 12.787 15.738">
              <path id="Path_129" data-name="Path 129"
                  d="M59.558,1.967H56.853V1.475A1.475,1.475,0,0,0,55.377,0H53.41a1.475,1.475,0,0,0-1.475,1.475v.492H49.23A1.23,1.23,0,0,0,48,3.2V4.18a.492.492,0,0,0,.492.492H60.3a.492.492,0,0,0,.492-.492V3.2A1.23,1.23,0,0,0,59.558,1.967Zm-6.64-.492A.492.492,0,0,1,53.41.984h1.967a.492.492,0,0,1,.492.492v.492H52.918Z"
                  transform="translate(-48)" fill="#e54d5b" />
              <path id="Path_130" data-name="Path 130"
                  d="M73.518,184a.154.154,0,0,0-.154.161l.406,8.516a1.474,1.474,0,0,0,1.474,1.405h7.469a1.474,1.474,0,0,0,1.474-1.405l.406-8.516a.154.154,0,0,0-.154-.161Zm7.428,1.23a.492.492,0,0,1,.984,0v6.394a.492.492,0,0,1-.984,0Zm-2.459,0a.492.492,0,1,1,.984,0v6.394a.492.492,0,0,1-.984,0Zm-2.459,0a.492.492,0,0,1,.984,0v6.394a.492.492,0,0,1-.984,0Z"
                  transform="translate(-72.585 -178.344)" fill="#e54d5b" />
          </svg>


      </span>
      <span class="border m-0 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14"
              viewBox="0 0 10 14">
              <g id="Group_15152" data-name="Group 15152"
                  transform="translate(-90.792 -82.5)">
                  <circle id="Ellipse_427" data-name="Ellipse 427" cx="1" cy="1" r="1"
                      transform="translate(90.792 82.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_432" data-name="Ellipse 432" cx="1" cy="1" r="1"
                      transform="translate(90.792 86.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_435" data-name="Ellipse 435" cx="1" cy="1" r="1"
                      transform="translate(90.792 90.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_438" data-name="Ellipse 438" cx="1" cy="1" r="1"
                      transform="translate(90.792 94.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_428" data-name="Ellipse 428" cx="1" cy="1" r="1"
                      transform="translate(94.792 82.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_431" data-name="Ellipse 431" cx="1" cy="1" r="1"
                      transform="translate(94.792 86.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_434" data-name="Ellipse 434" cx="1" cy="1" r="1"
                      transform="translate(94.792 90.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_437" data-name="Ellipse 437" cx="1" cy="1" r="1"
                      transform="translate(94.792 94.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_429" data-name="Ellipse 429" cx="1" cy="1" r="1"
                      transform="translate(98.792 82.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_430" data-name="Ellipse 430" cx="1" cy="1" r="1"
                      transform="translate(98.792 86.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_433" data-name="Ellipse 433" cx="1" cy="1" r="1"
                      transform="translate(98.792 90.5)" fill="#c3c5c9" />
                  <circle id="Ellipse_436" data-name="Ellipse 436" cx="1" cy="1" r="1"
                      transform="translate(98.792 94.5)" fill="#c3c5c9" />
              </g>
          </svg>

      </span>

  </div>
</div>
  `;
});
