import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useAppContext } from "../../../../contexts/AppContext";
import { useEffect, useState } from "react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = () => {
  const { theme } = useAppContext();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(
    function () {
      setIsDark(theme === "dark");
    },
    [theme]
  );

  // Chart data
  const data = {
    labels: ["January", "February", "March", "April"], // Time periods
    datasets: [
      {
        label: "Blind pedestrians",
        data: [1000, 1200, 1500, 1700], // Revenue data
        borderColor: isDark ? "#d9d9d9b6" : "#15151d", // Line color
        backgroundColor: isDark ? "#d9d9d913" : "#15151d2c", // Fill color for the area
        tension: 0.4, // Curve smoothing
        fill: true, // Fill the area below the line
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Place the legend at the top
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // X-axis title
          color: isDark ? "#d9d9d9" : "#15151d",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Blind pedestrians", // Y-axis title
          color: isDark ? "#d9d9d9" : "#15151d",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} color="#fff" />;
};

export default AreaChart;
