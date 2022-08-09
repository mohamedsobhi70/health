let date = new Date(2021, 0, 2);
function calendarRender() {
  let daySection = document.querySelector(".day-date");
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
  const daysstring = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daySection.innerHTML = `${daysstring[date.getDay()]} - ${
    months[date.getMonth()]
  } ${date.getDate()} `;
}

 calendarRender();
document.querySelector(".prev").addEventListener("click", () => {
    date.setDate(date.getDate() - 1);
    calendarRender();
  });
  document.querySelector(".next").addEventListener("click", () => {
      date.setDate(date.getDate() + 1);
    calendarRender();
  });
  console.log(document.querySelector(".next"));
 
