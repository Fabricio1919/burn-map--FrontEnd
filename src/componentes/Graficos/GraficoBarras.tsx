import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  municipio: string;
}

interface GraficoBarrasProps {
  queimadas: Queimada[];
}

const GraficoBarras: React.FC<GraficoBarrasProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.municipio),
    datasets: [
      {
        label: "Número de Queimadas",
        data: queimadas.map(() => Math.floor(Math.random() * 100) + 50),
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
    <Box width="100%" height="400px">
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GraficoBarras;
