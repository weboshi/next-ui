import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const MyLineChart = ({ ...props }) => {
  // X - axis lable

  const bpData = [];
  const bpData2 = [];
  const labels = [];

  let latestBPM = {};
  if (props.diagnosisHistory) {
    const diagnosisHistoryData = props.diagnosisHistory;
    latestBPM = diagnosisHistoryData[0]

    for (let i = 0; i < 6; i++) {
      bpData.push(diagnosisHistoryData[i].blood_pressure.diastolic.value)
    }

    for (let i = 0; i < 6; i++) {
      bpData2.push(diagnosisHistoryData[i].blood_pressure.systolic.value)
    }

    for (let i = 0; i < 6; i++) {
      labels.push(diagnosisHistoryData[i].month.substring(0,3) + ", " + diagnosisHistoryData[i].year.toString())
    }

    bpData.reverse();
    bpData2.reverse();
    labels.reverse();
  }


  // Data want to show on chart

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        data: bpData,
        fill: false,
        borderColor: "rgb(140, 111, 230)",
        tension: 0.4,
        display: false,
        backgroundColor: "rgb(140, 111, 230)",
        pointBorderColor: "white",
        pointBorderWidth: 1,
        
      },
      {
        // Title of Graph
        data: bpData2,
        fill: false,
        borderColor: "rgb(230, 111, 210)",
        tension: 0.4,
        display: false,
        backgroundColor: "rgb(230, 111, 210)",
        pointBorderColor: "white",
        pointBorderWidth: 1
      }
      // insert similar in dataset object for making multi line chart
    ],
  };

  // To make configuration
  const options = {
    responsive: true,
    elements: {
      point: {
        borderColor: '#000000',
        borderWidth: 5,
        radius: 7,
        tension: 0.4
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Blood Pressure',
        align: 'start',
        color: '#072635',
        padding: 2
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "",
        },
        display: true,
        min: 60,
        max: 180
      },
      x: {
        title: {
          display: false,
          text: "",
        },
        display: true,
      },
    },
  };

  return (
    <>
      <div className="diagnosis-history-chart">
        <h2>Diagnosis History</h2>
        <div className="diagnosis-history-chart-panel">
          <div className="diagnosis-chart">
            <div className="chart-title">
              <h2>Blood Pressure</h2>
            </div>
            <Line data={data} options={options} />
          </div>
          <div className="blood-pressure-panel">
            <div className="blood-pressure-panel-container">
              <div className="blood-pressure-panel-inner">
                <h3><div className="bp-circle"></div>Systolic</h3>
                {Object.keys(latestBPM).length === 0 ? "--" : (
                  <>
                    <p>
                      {latestBPM.blood_pressure.systolic.value}
                    </p>
                    <p>
                    {(latestBPM.blood_pressure.systolic.levels === "Higher than Average" &&
                        <Image
                          src="/img/ArrowUp.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                      {(latestBPM.blood_pressure.systolic.levels === "Lower than Average" &&
                        <Image
                          src="/img/ArrowDown.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                        {latestBPM.blood_pressure.systolic.levels === "Normal" && "" }
                      {latestBPM.blood_pressure.systolic.levels}                    </p>
                  </>)
                }
              </div>
            </div>
            <div className="blood-border-bottom"></div>
            <div className="blood-pressure-panel-container">
              <div className="blood-pressure-panel-inner">
                <h3><div className="bp-circle diastolic"></div>Diastolic</h3>
                {Object.keys(latestBPM).length === 0 ? "--" : (
                  <>
                    <p>
                      {latestBPM.blood_pressure.diastolic.value}
                    </p>
                    <p>
                      {(latestBPM.blood_pressure.diastolic.levels === "Higher than Average" &&
                        <Image
                          src="/img/ArrowUp.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                      {(latestBPM.blood_pressure.diastolic.levels === "Lower than Average" &&
                        <Image
                          src="/img/ArrowDown.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                        {latestBPM.blood_pressure.diastolic.levels === "Normal" && "" }
                      {latestBPM.blood_pressure.diastolic.levels}
                    </p>
                  </>)
                }
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 diagnostic-stats gap-4">
        <div className="diagnostic-stats-panel">
          <div className="diagnostic-stats-panel-inner">
            <div className="diagnostic-stats-icon">
              <Image
                src="/img/respiratory_rate.svg"
                width={96}
                height={96}
                alt="Calendar Icon"
              />
            </div>
            <p>Respiratory Rate</p>
            <h3>{Object.keys(latestBPM).length === 0 ? '--' : latestBPM.respiratory_rate.value} </h3>
            {Object.keys(latestBPM).length === 0 ? "--" : (
                  <>
                    <p>
                      {(latestBPM.respiratory_rate.levels === "Higher than Average" &&
                        <Image
                          src="/img/ArrowUp.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                      {(latestBPM.respiratory_rate.levels === "Lower than Average" &&
                        <Image
                          src="/img/ArrowDown.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                        {latestBPM.respiratory_rate.levels === "Normal" && "" }
                      {latestBPM.respiratory_rate.levels}
                    </p>
                  </>)
                }
          </div>
        </div>
        <div className="diagnostic-stats-panel">
          <div className="diagnostic-stats-panel-inner">
            <div className="diagnostic-stats-icon">
              <Image
                src="/img/temperature.svg"
                width={96}
                height={96}
                alt="Calendar Icon"
              />
            </div>
            <p>Temperature</p>
            <h3>{Object.keys(latestBPM).length === 0 ? '--' : latestBPM.temperature.value} </h3>
            {Object.keys(latestBPM).length === 0 ? "--" : (
                  <>
                    <p>
                      {(latestBPM.temperature.levels === "Higher than Average" &&
                        <Image
                          src="/img/ArrowUp.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                      {(latestBPM.temperature.levels === "Lower than Average" &&
                        <Image
                          src="/img/ArrowDown.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                        {latestBPM.temperature.levels === "Normal" && "" }
                      {latestBPM.temperature.levels}
                    </p>
                  </>)
                }          
                </div>
        </div><div className="diagnostic-stats-panel">
          <div className="diagnostic-stats-panel-inner">
            <div className="diagnostic-stats-icon">
              <Image
                src="/img/heartBPM.svg"
                width={96}
                height={96}
                alt="Calendar Icon"
              />
            </div>
            <p>Heart Rate</p>
            <h3>{Object.keys(latestBPM).length === 0 ? '--' : latestBPM.heart_rate.value} </h3>
            {Object.keys(latestBPM).length === 0 ? "--" : (
                  <>
                    <p>
                      {(latestBPM.heart_rate.levels === "Higher than Average" &&
                        <Image
                          src="/img/ArrowUp.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                      {(latestBPM.heart_rate.levels === "Lower than Average" &&
                        <Image
                          src="/img/ArrowDown.svg"
                          width={10}
                          height={5}
                          alt="Calendar Icon"
                        />)}
                        {latestBPM.heart_rate.levels === "Normal" && "" }
                      {latestBPM.heart_rate.levels}
                    </p>
                  </>)
                }
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLineChart;