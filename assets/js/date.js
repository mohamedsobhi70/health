const date = new Date();

let calendarRender = () => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateSection = document.querySelector(".date");
  const monthDays = document.querySelector(".month-calendar .days");
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  let firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 6 - lastDayIndex;
  let days = "";
  date.setDate(1);
  // display  this Month
  dateSection.innerHTML = `${months[month]} ${year}`;
  // display prev days
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date day">${prevLastDay - x}</div>`;
  }
  // display month days
  for (let i = 1; i <= lastDay; i++) {
    days += `<div class="day day-${i}">${i}</div>`;
    monthDays.innerHTML = days;
  }
  for (let i = 1; i <= nextDays; i++) {
    days += `<div class="next-date day">${i}</div>`;
    monthDays.innerHTML = days;
  }
  

  document.querySelector(
    ".day-5"
  ).innerHTML += `<div class="position-absolute event-content">
      <div class="d-flex justify-cntent-center">
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      <div class="event-imgs">
      <img src="assets/img/person.png" width="24px" alt="" />      
      </div>
      </div>

      <div class="fs-14 mt-3 mb-2 text-center">20 Appointments</div>
      <div class="fs-12 text-center slots">5 Slots Available</div>
    </div>`;

  // event
  document.querySelector(
    ".day-12"
  ).innerHTML += `<div class="position-absolute event-content">
        <div class="d-flex justify-cntent-center">
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        <div class="event-imgs">
        <img src="assets/img/person.png" width="24px" alt="" />      
        </div>
        </div>
  
        <div class="fs-14 mt-3 mb-2 text-center">20 Appointments</div>
        <div class="fs-12 text-center slots empty">0 Slots Available</div>
      </div>`;

  // event
  document.querySelector(
    ".day-9"
  ).innerHTML += `<div class="position-absolute event-content">
          <div class="d-flex justify-cntent-center">
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          <div class="event-imgs">
          <img src="assets/img/person.png" width="24px" alt="" />      
          </div>
          </div>
    
          <div class="fs-14 mt-3 mb-2 text-center">20 Appointments</div>
          <div class="fs-12 text-center slots">5 Slots Available</div>
        </div>`;
};

calendarRender();
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  calendarRender();
});
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calendarRender();
});
calendarRender();

console.log(document.querySelector(".next"));

