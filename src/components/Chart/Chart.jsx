import React from "react";
import ReactApexChart from "react-apexcharts";

class Chart extends React.Component {
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
    return (
      <div
        style={{ backgroundColor: "#F0FFF0", height: "100%" }}
      >
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="area"
          width="100%"
          height="60%"
        />
      </div>
    );
  }
}

export default Chart;
