import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  municipio: string;
}

interface GraficoLinhasProps {
  queimadas: Queimada[];
}

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.municipio),
    datasets: [
      {
        label: "Número de Queimadas",
        data: queimadas.map(() => Math.floor(Math.random() * 100) + 50),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Box width="100%" height="400px">
      <Line data={data} options={options} />
    </Box>
  );
};

export default GraficoLinhas;
