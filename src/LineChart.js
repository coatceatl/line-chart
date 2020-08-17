import React from "react";
import Chart from "react-apexcharts";
import data from './data.json'

const options = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: data.dates
  }
}

const series = [
  {
    name: "data",
    data: data.metrics[0].values
  }
]

export const LineChart = () => {
  console.log(data.metrics)
  console.log(data.dates)
  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={series}
        type="line"
      // width="500"
      />
    </div>
  );
}
