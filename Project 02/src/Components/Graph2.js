import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ value }) => {
  let active = value.active;
  let critical = value.critical;
  let deaths = value.deaths;

  return (
    <>
      <Doughnut
        data={{
          labels: ["Active", "Critical", "Deaths"],
          datasets: [
            {
              label: "# of Votes",
              data: [active, critical, deaths],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
          },
        }}
      />
    </>
  );
};

export default DoughnutChart;
