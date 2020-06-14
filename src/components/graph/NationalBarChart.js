import React from "react";
import { Bar } from "react-chartjs-2";

export const NationalBarChart = ({ barGraph }) => {
  return (
    <div>
      <Bar
        data={barGraph}
        options={{
          title: {
            display: false,
            text: "",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "bottom",
          },
        }}
      />
    </div>
  );
};
