window.onload = function () {
  var totalpatients = new CanvasJS.Chart("totalPatients", {
    axisX: {
      lineThickness: 0,
      labelFontColor: "#8898AA",
    },
    axisY: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#ccc",
      labelFontColor: "#8898AA",
      interval: 100,
    },
    data: [
      {
        type: "spline",
        lineColor: "#7764E4",
        lineThickness: 5,
        dataPoints: [
          { label: "May", y: 100, markerType: "none" },
          { label: "Jun", y: 300, markerType: "none" },
          { label: "Jul", y: 200, markerType: "none" },
          { label: "Aug", y: 380, markerType: "none" },
          { label: "Sep", y: 300, markerType: "none" },
          { label: "Oct", y: 530, markerType: "none" },
          { label: "Nov", y: 400, markerType: "none" },
          { label: "Dec", y: 700, markerType: "none" },
        ],
      },
    ],
  });

  totalpatients.render();
  var totalVisits = new CanvasJS.Chart("totalVisits", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#ccc",
    },
    axisY: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#8898AA",
      labelFontColor: "#8898AA",
      interval: 10000,
    },
    dataPointWidth: 20,
    data: [
      {
        type: "column",
        color: "#7764E4",
        dataPoints: [
          { label: "May", y: 60000 },
          { label: "Jun", y: 90000 },
          { label: "Jul", y: 30000 },
          { label: "Aug", y: 10000 },
          { label: "Sep", y: 60000 },
          { label: "Oct", y: 115000 },
        ],
      },
    ],
  });

  totalVisits.render();

  var chartvisits = new CanvasJS.Chart("visits", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#ccc",
    },
    axisY: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#8898AA",
      labelFontColor: "#8898AA",
      interval: 10,
    },
    dataPointWidth: 10,
    data: [
      {
        type: "column",
        color: "#FB6340",
        dataPoints: [
          { label: "May", y: 22 },
          { label: "Jun", y: 15 },
          { label: "Jul", y: 27 },
          { label: "Aug", y: 20 },
          { label: "Sep", y: 9 },
          { label: "Oct", y: 18 },
        ],
      },
    ],
  });
  chartvisits.render();

  //referals

  var chart = new CanvasJS.Chart("referals", {
    animationEnabled: true,
    title: {
      text: "1065 visits",
      fontSize: 18,
      horizontalAlign: "center",
      verticalAlign: "center",
    },
    data: [
      {
        type: "doughnut",
        startAngle: 100,
        //innerRadius: 60,
        indexLabelFontSize: 7,
        // indexLabel: "",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 350, label: "Social Media", color: "#2DCE98" },
          { y: 501, label: "Friends and Family", color: "#E54D5B" },
          { y: 76, label: "Doctors", color: "#11CDEF" },
          { y: 129, label: "Lab", color: "#FEB969" },
        ],
      },
    ],
  });
  chart.render();
};
