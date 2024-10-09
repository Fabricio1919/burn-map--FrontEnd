import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  quantidade: number;
}

interface GraficoBarrasProps {
  queimadas: Queimada[];
}

const GraficoBarras: React.FC<GraficoBarrasProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.estado),
    datasets: [
      {
        label: "Número de Queimadas",
        data: queimadas.map((q) => q.quantidade),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
    <Box className="chart-box" width="100%" height="400px" mb={4}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GraficoBarras;
