import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  quantidade: number;
}

interface GraficoLinhasProps {
  queimadas: Queimada[];
}

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.estado),
    datasets: [
      {
        label: "Número de Queimadas",
        data: queimadas.map((q) => q.quantidade),
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
    <Box width="100%" height="400px" mb={4}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default GraficoLinhas;
