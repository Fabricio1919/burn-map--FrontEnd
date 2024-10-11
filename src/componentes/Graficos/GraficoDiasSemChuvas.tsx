import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Skeleton } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  diaSemChuva: number;
}

interface GraficoDiasSemChuvasProps {
  queimadas: Queimada[];
  isLoading: boolean; // Adicionado para controle de carregamento
}

const GraficoDiasSemChuvas: React.FC<GraficoDiasSemChuvasProps> = ({
  queimadas,
  isLoading,
}) => {
  const data = {
    labels: queimadas.map((q) => q.estado), // Estados no eixo X
    datasets: [
      {
        label: "Dias sem Chuva",
        data: queimadas.map((q) => q.diaSemChuva), // Dias sem chuva no eixo Y
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1, // Ajusta a suavização da linha
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
        position: "top" as const, // Usando 'as const' para garantir o tipo correto
      },
      title: {
        display: true,
        text: "Dias sem Chuva por Estado",
      },
    },
  };

  return (
    <Box width="100%" height="400px" mb={4}>
      {isLoading ? (
        <Skeleton height="400px" />
      ) : (
        <Line data={data} options={options} />
      )}
    </Box>
  );
};

export default GraficoDiasSemChuvas;
