document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    headerToolbar: {
      left: "dayGridMonth,timeGridWeek,timeGridDay",
      center: "prev,title,next",
      right: "cancle",
    },
    initialDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    buttonIcons: false,
    selectMirror: true,
    slotDuration: "00:15:00",
    slotLabelInterval: 15,
    minTime: "9:00:00",
    maxTime: "12:00:00",
    allDaySlot: false,
    dayHeaders:true,
    dayHeaderFormat: {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: true,
    },
    buttonIcons: {
      prev: "chevron-left",
      next: "chevron-right",
    },
    titleFormat: {
      // will produce something like "Tuesday, September 18, 2018"
      month: "short",
      day: "numeric",
      weekday: "short",
    },
    eventContent: {
      html: `<div class="waiting-item mb-3 d-flex br-10 overflow-hidden">
    <div class="bg-waiting p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13">
            <g id="Group_14778" data-name="Group 14778" opacity="0.5">
              <circle id="Ellipse_398" data-name="Ellipse 398" cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" fill="#fff"/>
              <circle id="Ellipse_403" data-name="Ellipse 403" cx="1.5" cy="1.5" r="1.5" transform="translate(0 5)" fill="#fff"/>
              <circle id="Ellipse_399" data-name="Ellipse 399" cx="1.5" cy="1.5" r="1.5" transform="translate(5)" fill="#fff"/>
              <circle id="Ellipse_404" data-name="Ellipse 404" cx="1.5" cy="1.5" r="1.5" fill="#fff"/>
              <circle id="Ellipse_400" data-name="Ellipse 400" cx="1.5" cy="1.5" r="1.5" transform="translate(5 10)" fill="#fff"/>
              <circle id="Ellipse_405" data-name="Ellipse 405" cx="1.5" cy="1.5" r="1.5" transform="translate(0 10)" fill="#fff"/>
            </g>
          </svg>
          
    </div>
    <div class="d-flex my-2 border-end  w-100 ms-2 align-items-center">
        <img src="assets/img/person.png" width="24px" height="24px" class="rounded-circle"
            alt=""> <span class="ms-2 fs-12">Zaid Nishewat</span>
    </div>
    <div class="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="3" viewBox="0 0 13 3">
            <g id="Group_14762" data-name="Group 14762" transform="translate(-10375 -1640) rotate(-90)">
              <circle id="Ellipse_398" data-name="Ellipse 398" cx="1.5" cy="1.5" r="1.5" transform="translate(-1643 10380)" fill="#8a98aa"/>
              <circle id="Ellipse_399" data-name="Ellipse 399" cx="1.5" cy="1.5" r="1.5" transform="translate(-1643 10375)" fill="#8a98aa"/>
              <circle id="Ellipse_400" data-name="Ellipse 400" cx="1.5" cy="1.5" r="1.5" transform="translate(-1643 10385)" fill="#8a98aa"/>
            </g>
          </svg>
          
    </div>
</div>`,
    },
    // select: function (arg) {
    //   var title = prompt("Event Title:");
    //   if (title) {
    //     calendar.addEvent({
    //       title: title,
    //       start: arg.start,
    //       end: arg.end,
    //       allDay: arg.allDay,
    //     });
    //   }
    //   calendar.unselect();
    // },
    // // eventClick: function (arg) {
    // //   if (confirm("Are you sure you want to delete this event?")) {
    // //     arg.event.remove();
    // //   }
    // // },
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: "Long Event",
        start: "2022-07-21T09:00:00",
        end: "2022-07-21T09:15:00",
      },
      {
        title: "Long Event",
        start: "2022-09-07",
        end: "2022-07-21T09:15:00",
      },
      {
        title: "Long Event",
        start: "2022-07-22T09:00:00",
        end: "2022-07-22T09:15:00",
      },
      {
        title: "Long Event",
        start: "2022-07-23T09:1500",
        end: "2022-07-23T09:30:00",
      },
      {
        title: "Long Event",
        start: "2022-07-24T09:00:00",
        end: "2022-07-24T09:15:00",
      },
      {
        title: "Long Event",
        start: "2022-07-25T09:00:00",
        end: "2022-07-25T09:15:00",
      },
      {
        title: "Long Event",
        start: "2022-07-26T09:00:00",
        end: "2022-07-26T09:15:00",
      },
    ],
  });

  calendar.render();
  document.querySelector(
    ".fc-cancle-button"
  ).innerHTML = `<a href="" class="text-decoration-none cancle-visits">cancle visits</a>`;
  document.querySelector(
    ".fc-prev-button"
  ).innerHTML = `<i class="fas fa-chevron-left    "></i>`;
  document.querySelector(
    ".fc-next-button"
  ).innerHTML = `<i class="fas fa-chevron-right    "></i>`;
});
