document.addEventListener("DOMContentLoaded", function () {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendar.Draggable;
  var containerEl = document.getElementById("external-events");
  var calendarEl = document.getElementById("calendar");
  var checkbox = document.getElementById("drop-remove");
  // initialize the external events
  // -----------------------------------------------------------------

  new Draggable(containerEl, {
    itemSelector: ".fc-event",
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText,
      };
    },
  });

  // initialize the calendar
  // -----------------------------------------------------------------

  var calendar = new Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    dayMaxEvents: true, // allow "more" link when too many events
    initialView: "timeGridDay",
    initialDate: "2022-07-22",
    headerToolbar: {
      left: "dayGridMonth,timeGridWeek,timeGridDay",
      center: "prev,title,next",
      right: "cancle",
    },
    stickyHeaderDates: true,
    // events: "/cgi-bin/shlk/getshlkruns.pl",
    selectable: true,
    buttonIcons: true,
    selectMirror: true,
    slotDuration: "00:15:00",
    slotLabelInterval: 15,
    slotLabelFormat: [
      { hour: "numeric", minute: "numeric", omitZeroMinute: false }, // top level of text
    ],
    slotMinTime: "9:00:00",
    slotMaxTime: "12:00:00",
    allDaySlot: false,
    dayHeaders: false,
    // dayHeaderFormat:{ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true},
    titleFormat: {
      // will produce something like "Tuesday, September 18, 2018"
      month: "short",
      day: "numeric",
      weekday: "short",
    },
    views: {
      dayGridMonth: {
        // name of view
        titleFormat: { year: "numeric", month: "short" },
        dayHeaders: true,

        moreLinkDidMount: function (arg) {
          arg.el.innerHTML = `${arg.num} <p class='fs-12 text-success'> Slots Available</p>`;
        },
        // other view-specific options here
      },
      week: {
        titleFormat: { year: "numeric", month: "short", omitCommas: true },
        dayHeaders: true,

        // other view-specific options here
      },
    },

    allDayDefault: false,
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function (info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },
    eventContent: {
      html: `   <div class="waiting-item popup-open mb-3 d-flex br-10 overflow-hidden">
      <div class="bg-waiting p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13"
              viewBox="0 0 8 13">
              <g id="Group_14778" data-name="Group 14778" opacity="0.5">
                  <circle id="Ellipse_398" data-name="Ellipse 398" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(5 5)" fill="#fff" />
                  <circle id="Ellipse_403" data-name="Ellipse 403" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(0 5)" fill="#fff" />
                  <circle id="Ellipse_399" data-name="Ellipse 399" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(5)" fill="#fff" />
                  <circle id="Ellipse_404" data-name="Ellipse 404" cx="1.5"
                      cy="1.5" r="1.5" fill="#fff" />
                  <circle id="Ellipse_400" data-name="Ellipse 400" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(5 10)" fill="#fff" />
                  <circle id="Ellipse_405" data-name="Ellipse 405" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(0 10)" fill="#fff" />
              </g>
          </svg>

      </div>
      <div class="d-flex my-2 border-end  w-100 ml-2 align-items-center">
          <img src="assets/img/person.png" width="24px" height="24px"
              class="rounded-circle" alt=""> <span class="ml-2 fs-12">Zaid
              Nishewat</span>
      </div>
      <div class="p-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="3"
              viewBox="0 0 13 3">
              <g id="Group_14762" data-name="Group 14762"
                  transform="translate(-10375 -1640) rotate(-90)">
                  <circle id="Ellipse_398" data-name="Ellipse 398" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(-1643 10380)"
                      fill="#8a98aa" />
                  <circle id="Ellipse_399" data-name="Ellipse 399" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(-1643 10375)"
                      fill="#8a98aa" />
                  <circle id="Ellipse_400" data-name="Ellipse 400" cx="1.5"
                      cy="1.5" r="1.5" transform="translate(-1643 10385)"
                      fill="#8a98aa" />
              </g>
          </svg>
          <div class="popup  position-absolute fs-12 w-100 bg-danger d-none">
              <p class="font-weight-bold">Change Status To:</p>
              <div class="row mx-2 pb-4  border-bottom">
                  <div class="col-6 Scheduled">
                      <input type="radio" name="Scheduled" id="Scheduled">
                      <label for="Scheduled">Scheduled</label>
                  </div>
                  <div class="col-6 Checked">
                      <input type="radio" name="Checked" id="Checked">
                      <label for="Checked">Checked In</label>
                  </div>
                  <div class="col-6 Progress">
                      <input type="radio" name="Progress" id="Progress">
                      <label for="Progress">In Progress</label>
                  </div>
                  <div class="col-6 Completed">
                      <input type="radio" name="Completed" id="Completed">
                      <label for="Completed">Completed</label>
                  </div>
                  <div class="col-6 Paid">
                      <input type="radio" name="Paid" id="Paid">
                      <label for="Paid">Paid</label>
                  </div>
              </div>
              <div class=" p-4 border-bottom">
                  <a href="#" class="d-block">View Patient Profile</a>
                  <a href="#" class="d-block">Reschedule Visit</a>
              </div>
              <a href="#" class="text-danger d-block  p-3">Cancel Visit</a>

          </div>
      </div>


  </div>`,
    },
    events: [
      {
        title: "Long Event",
        start: "2022-07-22T09:00:00",
        end: "2022-07-22T09:15:00",
      },
    ],
  });

  calendar.render();
  document.querySelector(".fc-cancle-button").style.display = "none";
  document.querySelector(
    ".fc-prev-button"
  ).innerHTML = `<i class="fas fa-chevron-left    "></i>`;
  document.querySelector(
    ".fc-next-button"
  ).innerHTML = `<i class="fas fa-chevron-right    "></i>`;
});

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
