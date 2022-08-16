import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function RadarChart({ chartData }) {
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 5,
        pointWidth: 10,
        pointStyle: "rect",
        hoverRadius: 12,
        hoverBorderWidth: 4,
        hoverBorderColor: "rgba(0, 0, 0, 0.5)",
        pointHoverBackgroundColor: "rgba(222, 50, 64, 1)",
      },
    },
    scales: {
      r: {
        pointLabels: {
          color: "rgba(255,255,255, 1)",
          font: {
            size: 13,
            family: "'Merriweather Sans', 'sans-serif'",
          },
        },
        angleLines: {
          //display: true,
          //color: "rgba(255, 255, 255, 1)",
          //lineWidth: 1,
        },
        grid: {
          color: "rgba(0, 0, 0, .2)",
          lineWidth: 2,
        },
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: {
          stepSize: 50,
          showLabelBackdrop: false,
          color: "rgba(255,255,255, 1)",
        },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
}

export default RadarChart;
