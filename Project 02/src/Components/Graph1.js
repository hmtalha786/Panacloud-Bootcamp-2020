import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ value }) => {
  let tests = value.tests;
  let cases = value.cases;
  let recovered = value.recovered;

  return (
    <>
      <Doughnut
        data={{
          labels: ["Tested", "Cases", "Recovered"],
          datasets: [
            {
              label: "# of Votes",
              data: [tests, cases, recovered],
              backgroundColor: [
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(153, 102, 255, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(75, 192, 192, 1)",
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
