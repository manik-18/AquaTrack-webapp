import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js";
import "chart.js/auto";

const Chart = ({ data, parameter }) => {
  if (!data.values || data.values.length === 0 || !Array.isArray(data.values)) {
    return null; // Handle empty or invalid data
  }

  // Extract parameter values and times from data
  const parameterValues = data.values.map((entry) => entry.value);
  const times = data.values.map((entry) => entry.time);
  const minNormalRange = data.min;
  const maxNormalRange = data.max;

  const chartData = {
    labels: times,
    datasets: [
      {
        label: `${parameter} Values`,
        data: parameterValues,
        borderColor: "white",
        borderWidth: 2,
        pointBackgroundColor: parameterValues.map((value) =>
          value >= minNormalRange && value <= maxNormalRange ? "green" : "red"
        ),
        pointRadius: 7,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Time",
          color: "#2ecc71",
        },
        grid: {
          color: "black",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: `${parameter} Range`,
          color: "#2ecc71",
        },
        grid: {
          color: "black",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
