import React, { useContext, useEffect } from "react";

import CustomChart from "../../components/Chart/CustomChart";
import NavigateLeftColumn from "../../components/NavigateLeftColumn/NavigateLeftColumn";

import { PowerViewContext } from "../../contexts/powerViewUserContext";

import moment from "moment";

import "./CircuitDashboard.css";

function CircuitDashboard() {
  const { listDashboard, dashboardData, dashboardInfo } =
    useContext(PowerViewContext);

  const getSeries = () => {
    const currents = dashboardData?.map(
      (entry) => `${parseFloat(entry.current_measurement).toFixed(2)}`
    );

    return [
      {
        name: "Corrente",
        type: "line",
        data: currents,
      },
    ];
  };

  const getOptions = () => {
    const timestamps = dashboardData?.map((entry) =>
      moment(entry.timestamp).format("DD/MM/YYYY HH:mm:ss")
    );

    return {
      chart: {
        id: "current-area-chart",
        height: 350,
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        colors: ["0049CD"],
        opacity: 0.5,
      },
      grid: {
        strokeDashArray: 10,
        position: "back",
        borderColor: "#F6F6F6",
        padding: {
          top: 20,
          right: 20,
          bottom: 10,
          left: 20,
        },
      },
      labels: timestamps,
      markers: {
        size: 0,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        tickAmount: 8,
        lines: {
          show: true,
        },
        labels: {
          style: {
            fontSize: "1rem",
            colors: ["#878787"],
          },
        },
        title: {
          text: "Corrente",
        },
      },
      tooltip: {
        theme: "dark",
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
      zoom: {
        enabled: true,
        type: "xy",
        autoScaleYaxis: true,
      },
    };
  };

  const getChartSeries = () => {
    if (dashboardData === "No data") {
      return <>Sem dados</>;
    } else if (dashboardData?.length > 0) {
      return (
        <CustomChart chartOptions={getOptions()} chartData={getSeries()} />
      );
    }
  };

  useEffect(() => {
    const url = window.location.pathname;
    const circuitId = url.split("/")[2];
    listDashboard(circuitId);
  }, []); //eslint-disable-line

  return (
    <div className="dashboard-container">
      <NavigateLeftColumn />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#808080",
        }}
      >
        <h2 style={{ margin: "4px 16px", marginTop: "16px" }}>
          {dashboardInfo.circuit_name}
        </h2>
        <p style={{ margin: "8px 16px" }}>
          {dashboardInfo.circuit_description}
        </p>

        {getChartSeries()}
      </div>
    </div>
  );
}

export default CircuitDashboard;
