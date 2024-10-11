import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  diaSemChuva: number;
}

interface GraficoDiasSemChuvasProps {
  queimadas: Queimada[];
}

const GraficoDiasSemChuvas: React.FC<GraficoDiasSemChuvasProps> = ({
  queimadas,
}) => {
  const data = {
    labels: queimadas.map((q) => q.estado),
    datasets: [
      {
        label: "Dias sem Chuva",
        data: queimadas.map((q) => q.diaSemChuva),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Dias sem Chuva por Estado",
      },
    },
  };

  return (
    <Box width="100%" height="400px" mb={4}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default GraficoDiasSemChuvas;
