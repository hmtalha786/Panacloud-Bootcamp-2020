import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ value }) => {
  let todayCases = value.todayCases;
  let todayRecovered = value.todayRecovered;
  let todayDeaths = value.todayDeaths;

  return (
    <>
      <Doughnut
        style={{ marginTop: "40px", marginLeft: "0px" }}
        data={{
          labels: ["Today's Cases", "Recovered Today", "Today's Deaths"],
          datasets: [
            {
              label: "# of Votes",
              data: [todayCases, todayRecovered, todayDeaths],
              backgroundColor: [
                "rgba(153, 102, 255, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(153, 102, 255, 1)",
                "rgba(75, 192, 192, 1)",
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
