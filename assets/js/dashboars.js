window.onload = function () {
  var chart = new CanvasJS.Chart("totalPatients", {
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

  chart.render();

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
    dataPointWidth:10,
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
};
