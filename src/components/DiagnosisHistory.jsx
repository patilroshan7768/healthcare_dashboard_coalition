import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon } from "./Icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function TrendIcon({ levels }) {
  if (!levels) return null;
  const lower = levels.toLowerCase();
  if (lower.includes("higher")) return <ArrowUpIcon className="trend-icon" />;
  if (lower.includes("lower")) return <ArrowDownIcon className="trend-icon" />;
  return null;
}

function DiagnosisHistory({ diagnosisHistory }) {
  if (!diagnosisHistory) {
    return <h2>Loading...</h2>;
  }

  const latestHistory = diagnosisHistory.slice(0, 6);

  const latest = latestHistory[latestHistory.length - 1];

  const labels = latestHistory.map((item) => `${item.month}, ${item.year}`);

  const systolicData = latestHistory.map(
    (item) => item.blood_pressure.systolic.value
  );

  const diastolicData = latestHistory.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 6,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#7B61FF",
        backgroundColor: "#7B61FF",
        pointBackgroundColor: "#7B61FF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#072635",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
      },
    },

    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          color: "#8C96A3",
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        min: 60,
        max: 180,

        ticks: {
          stepSize: 20,
          color: "#8C96A3",
          font: {
            size: 11,
          },
        },

        grid: {
          color: "#E3DDF7",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>

      <div className="chart-card">
        <div className="chart-left">
          <div className="chart-head">
            <h3>Blood Pressure</h3>
            <span className="chart-period">
              Last 6 months
              <ChevronDownIcon />
            </span>
          </div>

          <div className="chart-canvas-wrap">
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="chart-right">
          <div className="reading">
            <p className="reading-label">
              <span className="reading-dot systolic" />
              Systolic
            </p>

            <h2>{latest.blood_pressure.systolic.value}</h2>

            <span className="reading-trend">
              <TrendIcon levels={latest.blood_pressure.systolic.levels} />
              {latest.blood_pressure.systolic.levels}
            </span>
          </div>

          <div className="reading">
            <p className="reading-label">
              <span className="reading-dot diastolic" />
              Diastolic
            </p>

            <h2>{latest.blood_pressure.diastolic.value}</h2>

            <span className="reading-trend">
              <TrendIcon levels={latest.blood_pressure.diastolic.levels} />
              {latest.blood_pressure.diastolic.levels}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
