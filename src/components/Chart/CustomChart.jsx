import React from "react";
import Chart from "react-apexcharts";
import PropTypes from 'prop-types';

class CustomChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    const options = {
      chart: {
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        }
      },
      yaxis: {
        lines: {
          show: true
        },
        max: 35,
        tickAmount: 6,
        axisBorder: {
          height: 2,
          color: "#F6F6F6",
          offsetY: -1,
        },
        labels: {
          style: {
            fontSize: "1rem",
            colors: ["#878787"],
          },
          // formatter: (value) => currencyFormat(value),
        },
      },
      xaxis: {
        lines: {
          show: true
        },
        tickAmount: 10,
        axisBorder: {
          height: 2,
          color: "#F6F6F6",
          offsetY: -1,
        },
      },
      tooltip: {
        theme: "dark",
      },

      colors: ["#0049CD"],
      stroke: {
        curve: "straight",
        colors: ["#0049CD"],
        width: 4,
      },
      fill: {
        type: "solid",
        colors: ["#0049CD"],
      },
      markers: {
        size: 5,
      },
      grid: {
        strokeDashArray: 10,
        position: "back",
        borderColor: "#e7e7e7",
        row: {
          colors: ["#DFDFDF", "transparent"], // takes an array which will be repeated on columns
          // opacity: 5
        },
        padding: {
          top: 20,
          right: 20,
          bottom: 10,
          left: 20,
        },
      },
    };

    return (
      <div style={{ backgroundColor: "#F6F6F6", height: "100%", color:"#000" }}>
        <Chart
          options={{ ...options, ...this.state.chartOptions }}
          series={this.state.chartData}
          type="line"
          width="100%"
          height="95%"
        />
      </div>
    );
  }
}
CustomChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  chartOptions: PropTypes.object.isRequired,
};

export default CustomChart;
