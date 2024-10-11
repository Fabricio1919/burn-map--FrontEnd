import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Skeleton } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  quantidade: number;
}

interface GraficoGeralProps {
  queimadas: Queimada[];
  isLoading: boolean;
}

const GraficoGeral: React.FC<GraficoGeralProps> = ({
  queimadas,
  isLoading,
}) => {
  const data = {
    labels: queimadas.map((q) => q.estado),
    datasets: [
      {
        label: "Número de Queimadas",
        data: queimadas.map((q) => q.quantidade),
        backgroundColor: queimadas.map(
          () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.6)`
        ),
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
        text: "Número de Queimadas por Estado",
      },
    },
  };

  return (
    <Box className="chart-box" width="100%" height="400px" mb={4}>
      {isLoading ? (
        <Skeleton height="400px" />
      ) : (
        <Bar data={data} options={options} />
      )}
    </Box>
  );
};

export default GraficoGeral;
