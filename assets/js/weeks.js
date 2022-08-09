let date = new Date(2021, 0, 2);
let date2 =  
function calendarRender() {
  let daySection = document.querySelector(".week-date");
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
  daySection.innerHTML = ` ${months[date.getMonth()]} ${date.getDate() } -  `;
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
