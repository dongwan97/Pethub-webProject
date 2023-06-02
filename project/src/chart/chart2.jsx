import { useEffect, useState } from "react";
import styled from "styled-components";
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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "강아지 몸무게",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: labels.map((month) => localStorage.getItem(month)),
      },
    ],
  });

  useEffect(() => {
    const updatedData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: labels.map((month) => localStorage.getItem(month)),
        },
      ],
    };
    setChartData(updatedData);
  }, []);

  return (
    <Container>
      <Line data={chartData} />
    </Container>
  );
};

export default Chart;
