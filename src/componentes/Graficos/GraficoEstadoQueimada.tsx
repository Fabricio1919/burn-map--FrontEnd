// src/components/Graficos/GraficoPizzaEstado.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";

interface Queimada {
  estado: string;
  quantidade: number;
}

interface GraficoEstadoQueimadaProps {
  queimada: Queimada[];
}

const GraficoEstadoQueimada: React.FC<GraficoEstadoQueimadaProps> = ({
  queimada,
}) => {
  const data = {
    labels: queimada.map((queimada) => queimada.estado),
    datasets: [
      {
        Label: "Queimadas",
        data: queimada.map((municipio) => municipio.quantidade),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
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
        text: "Queimadas por Estado",
      },
    },
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bgGradient="linear(to-br, #f7fafc, #e2e8f0)"
      textAlign="center"
    >
      <Box height="300px" width="300px" mx="auto">
        <Pie data={data} options={options} />
      </Box>
    </Box>
  );
};

export default GraficoEstadoQueimada;
