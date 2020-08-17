import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";
import data from "./data.json";

const options = {
  chart: {
    toolbar: {
      show: false
    },
  },
  tooltip: {
    fillSeriesColor: true,
    theme: "dark",
    y: {
      formatter: function (val) {
        return val.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
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
        return moment(timestamp).format("MMM D")
      },
      rotateAlways: true,
      rotate: 360,
      offsetY: 15,
      offsetX: 5
    },
    type: "numeric",
    tickAmount: 5,
  },
  yaxis: {
    tickAmount: 4,
  },
  title: {
    text: data.metrics[0].current,
    offsetX: 8
  },
  // subtitle: {
  //   text: data.metrics[0].trend.percent,
  //   align: "right",
  //   offsetY: 1,
  //   offsetX: 3,
  //   style: {
  //     fontWeight: "bold"
  //   }
  // }
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
