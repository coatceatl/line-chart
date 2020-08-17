import React from "react";
import Chart from "react-apexcharts";
import data from './data.json'

const options = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    fillSeriesColor: true,
    theme: "dark",
    y: {
      formatter: function (val) {
        return val.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          useGrouping: true,
          maximumFractionDigits: 0,
          minimumFractionDigits: 0
        });
      }
    }
  },
  xaxis: {
    categories: data.dates,
    tooltip: {
      enabled: false
    },
    labels: {
      formatter: function (timestamp) {
        return new Date(timestamp).toDateString()
      }
    },
    type: 'numeric',
    tickAmount: 5,
  },
  yaxis: {
    tickAmount: 4,
  },
  title: {
    text: data.metrics[0].current,
  },
}
const series = [
  {
    name: "",
    data: data.metrics[0].values,
  }
]

export const LineChart = () => {
  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={series}
        type="line"
      />
    </div>
  );
}
