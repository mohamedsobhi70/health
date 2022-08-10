// function calendarRender() {
//   let date = new Date(2021, 0, 2);
//   let first = date.getDate() - date.getDay();
//   let firstday = new Date(date.setDate(first));
//   console.log(firstday);
//   let daySection = document.querySelector(".week-date");

//   daySection.innerHTML = ` ${months[firstday.getMonth()]} ${firstday.getDate()} -  ${months[date.getMonth()]} ${date.getDate()}  `;
// ;
// }

// calendarRender();
// document.querySelector(".prev").addEventListener("click", () => {
//   date.setDate(date.getDate() - 1);
//   calendarRender();
// });
// document.querySelector(".next").addEventListener("click", () => {
//   date.setDate(date.getDate() + 1);
//   calendarRender();
// });
// console.log(document.querySelector(".next"));

// drag drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//
const today = new Date(2021, 0, 2);

function getFirstDayOfWeek(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -7 : 1);
  return new Date(date.setDate(diff));
}
let firstDay = getFirstDayOfWeek(today);
let lastDay = new Date(firstDay);
lastDay.setDate(lastDay.getDate() + 6);
function calenderRender() {
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
  let daySection = document.querySelector(".week-date");
  daySection.innerHTML = ` ${
    months[firstDay.getMonth()]
  } ${firstDay.getDate()} -  ${
    months[lastDay.getMonth()]
  } ${lastDay.getDate()}  `;
}

calenderRender();
document.querySelector(".prev").addEventListener("click", () => {
    firstDay.setDate(firstDay.getDate() - 7);
    lastDay.setDate(lastDay.getDate() - 7);
    calenderRender();
  });
  document.querySelector(".next").addEventListener("click", () => {
    firstDay.setDate(firstDay.getDate() + 7);
    lastDay.setDate(lastDay.getDate() + 7);
    calenderRender();
  });