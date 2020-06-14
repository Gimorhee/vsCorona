import React from "react";
import { Line } from "react-chartjs-2";

export const NationalLineChart = ({ lineGraph }) => {
  return (
    <div>
      <Line
        data={lineGraph}
        options={{
          title: {
            display: false,
            text: "Any Title",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
};
