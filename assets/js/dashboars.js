window.onload = function () {
  // total patients chart
  var totalpatients = new CanvasJS.Chart("totalPatients", {
    axisX: {
      lineThickness: 0,
      labelFontColor: "#8898AA",
      tickLength: 0,
    },
    axisY: {
      lineThickness: 0,
      tickLength: 0,

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
  // total visits chart
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
  //  visits chart

  var chartvisits = new CanvasJS.Chart("visits", {
    animationEnabled: true,
    axisX: {
      lineThickness: 0,
      labelFontColor: "#8898AA",
      tickLength: 0,
    },
    axisY: {
      lineThickness: 0,
      tickLength: 0,

      gridDashType: "longDash",
      gridColor: "#ccc",
      labelFontColor: "#8898AA",
      interval: 100,
    },
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#ccc",
    },
    axisY: {
      tickLength: 0,
      lineThickness: 0,
      gridDashType: "longDash",
      gridColor: "#8898AA",
      labelFontColor: "#8898AA",
      interval: 10,
    },
    axisX: { tickLength: 0 },
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

  //referals chart
  var chart = new CanvasJS.Chart("referals", {
    title: {
      text: "1065 visits",
      fontSize: 18,
      horizontalAlign: "center",
      verticalAlign: "center",
    },
    legend: {
      itemWidth: 200,
      fontSize: 18,
    },
    data: [
      {
        type: "doughnut",
        indexLabelPlacement: "outside",
        dataPoints: [
          {
            y: 350,
            legendText: "Social Media",
            label: "Social Media",
            color: "#2DCE98",
            showInLegend: true,
            legendMarkerColor: "#fff",
            legendMarkerBorderColor: "#2DCE98",
            legendMarkerBorderThickness: 4,
          },
          {
            y: 501,
            legendText: "Friends and Family",
            label: "Friends and Family",
            color: "#E54D5B",
            legendMarkerColor: "#fff",
            legendMarkerBorderColor: "#E54D5B",
            legendMarkerBorderThickness: 4,
            showInLegend: true,
          },
          {
            y: 76,
            legendText: "Doctors",
            label: "Doctors",
            color: "#11CDEF",
            legendMarkerColor: "#fff",
            legendMarkerBorderColor: "#11CDEF",
            legendMarkerBorderThickness: 4,
            showInLegend: true,
          },
          {
            y: 129,
            legendText: "Lab",
            label: "Lab",
            color: "#FEB969",
            legendMarkerColor: "#fff",
            legendMarkerBorderColor: "#FEB969",
            legendMarkerBorderThickness: 4,
            showInLegend: true,
          },
        ],
      },
    ],
  });

  chart.render();
  // var chart = new CanvasJS.Chart("referals", {
  //   animationEnabled: true,
  //   title: {
  //     text: "1065 visits",
  //     fontSize: 18,
  //     horizontalAlign: "center",
  //     verticalAlign: "center",
  //   },
  //   legend:{
  //   },
  //   data: [
  //     {
  //       showInLegend: true,
  //       type: "doughnut",
  //       startAngle: 100,
  //       //innerRadius: 60,
  //       indexLabelFontSize: 7,
  //       // indexLabel: "",
  //       toolTipContent: "<b>{label}:</b> {y} (#percent%)",
  //       dataPoints: [
  //         { y: 350, legend:"hi" ,label: "Social Media", color: "#2DCE98" },
  //         { y: 501, label: "Friends and Family", color: "#E54D5B" },
  //         { y: 76, label: "Doctors", color: "#11CDEF" },
  //         { y: 129, label: "Lab", color: "#FEB969" },
  //       ],
  //     },
  //   ],
  // });
  // chart.render();

  var chart = new CanvasJS.Chart("insurance", {
    dataPointWidth: 5,
    axisX: {
      lineThickness: 0,
      labelFontColor: "#8898AA",
      tickLength: 0,
    },
    axisY: {
      lineThickness: 0,
      tickLength: 0,
      maximum: 700,
      minimum: 100,
      gridDashType: "longDash",
      gridColor: "#ccc",
      labelFontColor: "#8898AA",
      interval: 100,
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        legendText: "Gig",
        legendMarkerColor: "white",
        legendMarkerBorderColor: "#11CDEF",
        legendMarkerBorderThickness: 3,
        legendMarkerType: "circle",

        dataPoints: [
          { label: "Jan", y: 221, color: "#11CDEF" },
          { label: "Jun", y: 455, color: "#11CDEF" },
          { label: "Jul", y: 350, color: "#11CDEF" },
          { label: "Aug", y: 365, color: "#11CDEF" },
          { label: "Sep", y: 295, color: "#11CDEF" },
          { label: "Oct", y: 568, color: "#11CDEF" },
        ],
      },
      {
        type: "column",
        showInLegend: true,
        legendText: "Nathealth",
        legendMarkerColor: "white",
        legendMarkerBorderColor: "#7764E4",
        legendMarkerBorderThickness: 3,
        legendMarkerType: "circle",
        legendMarkerSize: 400,

        dataPoints: [
          { label: "Jan", y: 471, color: "#7764E4" },
          { label: "Jun", y: 553, color: "#7764E4" },
          { label: "Jul", y: 503, color: "#7764E4" },
          { label: "Aug", y: 365, color: "#7764E4" },
          { label: "Sep", y: 395, color: "#7764E4" },
          { label: "Oct", y: 368, color: "#7764E4" },
        ],
      },
      {
        type: "column",
        showInLegend: true,
        legendText: "Alnaser Alarabi",
        legendMarkerColor: "white",
        legendMarkerBorderColor: "#2DCE98",
        legendMarkerBorderThickness: 3,
        legendMarkerType: "circle",
        dataPoints: [
          { label: "Jan", y: 550, color: "#2DCE98" },
          { label: "Jun", y: 234, color: "#2DCE98" },
          { label: "Jul", y: 203, color: "#2DCE98" },
          { label: "Aug", y: 253, color: "#2DCE98" },
          { label: "Sep", y: 453, color: "#2DCE98" },
          { label: "Oct", y: 283, color: "#2DCE98" },
        ],
      },
    ],
  });

  chart.render();

  // top 3 employers

  var chart = new CanvasJS.Chart("employers", {
    animationEnabled: true,

    axisY: {
      lineThickness: 0,
      tickLength: 0,
      maximum: 400,
      gridDashType: "longDash",
      gridColor: "#ccc",
      labelFontColor: "#8898AA",
      interval: 100,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      verticalAlign: "top",
      horizontalAlign: "center",
    },
    data: [
      {
        type: "stackedColumn",
        name: "Zain",
        showInLegend: true,
        legendMarkerColor: "#7764E4",
        legendMarkerType: "circle",
        dataPoints: [
          { label: "jan", y: 40, color: "#7764E4" },
          { label: "Feb", y: 50, color: "#7764E4" },
          { label: "mar", y: 60, color: "#7764E4" },
        ],
      },
      {
        type: "stackedColumn",
        name: "Orange",
        showInLegend: true,
        legendMarkerColor: "#FB6340",
        legendMarkerType: "circle",
        dataPoints: [
          { label: "jan", y: 60, color: "#FB6340" },
          { label: "Feb", y: 18, color: "#FB6340" },
          { label: "mar", y: 32, color: "#FB6340" },
        ],
      },
      {
        type: "stackedColumn",
        name: "Amazon",
        showInLegend: true,
        legendMarkerColor: "#FEB969",
        // legendMarkerColor: "#7764E4",
        legendMarkerType: "circle",
        dataPoints: [
          { label: "jan", y: 95, color: "#FEB969" },
          { label: "Feb", y: 22, color: "#FEB969" },
          { label: "mar", y: 60, color: "#FEB969" },
        ],
      },
    ],
  });
  chart.render();
};
