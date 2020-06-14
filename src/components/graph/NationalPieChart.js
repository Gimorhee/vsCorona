import React from "react";
import { Pie } from "react-chartjs-2";

export const NationalPieChart = ({ pieGraph }) => {
  return (
    <Pie
      data={pieGraph}
      options={{
        title: {
          display: false,
          text: "Average Rainfall per month",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "bottom",
        },
      }}
    />
  );
};
