import React, { useContext, useEffect } from "react";

import Chart from "../../components/Chart/Chart";
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
        height: 350,
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "solid",
        opacity: [0.35, 1, 1],
      },
      labels: timestamps,
      markers: {
        size: 0,
      },
      yaxis: [
        {
          title: {
            text: "Corrente",
          },
        },
      ],
      tooltip: {
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
    };
  };

  const getChartSeries = () => {
    if (dashboardData === "No data") {
      return <>Sem dados</>;
    } else if (dashboardData?.length > 0) {
      return (
        <>
          <Chart chartOptions={getOptions()} chartData={getSeries()} />
        </>
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
          backgroundColor: "#333333",
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
