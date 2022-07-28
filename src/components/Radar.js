import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function RadarChart({ chartData }) {
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(255, 255, 255, .3)",
          lineWidth: 1,
        },
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: {
          stepSize: 50,
          showLabelBackdrop: false,
        },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
}

export default RadarChart;
