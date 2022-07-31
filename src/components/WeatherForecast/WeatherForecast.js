import React, { useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";

const chartStyle = {
  borderCapStyle: "round",
  borderColor: "#5596f6",
  borderWidth: 2,
  tension: 0.4,
  hoverBorderWidth: 3,
  hoverRadius: 6,
  hoverBorderColor: "#fff",
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  hoverBackgroundColor: "#5596f6",
};
// const options = {
//   maintainAspectRatio: false,
//   layout: {
//     padding: {
//       left: 20,
//       right: 20,
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       enabled: false,
//     },
//     datalabels: {
//       color: "#522BFF",
//       align: "top",
//       offset: 15,
//       font: {
//         size: "23.63",
//         family: "Ubuntu",
//         weight: "600",
//         letterSpacing: "-0.81",
//       },
//       display: function (context, i) {
//         return (
//           !(context.dataIndex % 2) &&
//           context.dataIndex < context.dataset.data.length - 1
//         );
//       },
//       formatter: function (value, ctx) {
//         return ctx.active ? value + "°F" : value + "°F";
//       },
//     },
//   },
//   elements: {
//     line: {
//       tension: 0.4,
//     },
//   },
//   scales: {
//     x: {
//       position: "top",
//       gridLines: {
//         offsetGridLines: true,
//       },
//       ticks: {
//         autoSkip: true,
//         maxTicksLimit: 5,
//         color: "#1C1C1C",
//         align: "left",
//         backdropPadding: "20",
//         font: {
//           size: "18",
//           family: "Ubuntu",
//           weight: "300",
//         },
//       },
//       grid: {
//         borderWidth: "2",
//         borderDash: [8, 4],
//         color: "#CDC2FF",
//         drawBorder: false,
//         lineWidth: 2,
//         tickLength: 0,
//         offset: true,
//       },
//     },
//     y: {
//       suggestedMin: chartMin ? chartMin - 5 : 0,
//       suggestedMax: chartMax ? chartMax + 10 : 100,
//       ticks: {
//         display: false,
//         beginAtZero: true,
//       },
//       grid: {
//         display: false,
//         drawBorder: false,
//       },
//     },
//   },
// };
// const chartHeight = 120;
const WeatherForcast = ({ forcast }) => {
  // console.log(forcast.main.pressure);
  return <div>WeatherForcast</div>;
};

export default WeatherForcast;
