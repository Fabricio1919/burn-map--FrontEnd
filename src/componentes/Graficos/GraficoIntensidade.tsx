import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Queimada } from "../../mock/QueimadasData";

interface GraficoIntensidadeProps {
  queimadas: Queimada[];
}

const GraficoIntensidade: React.FC<GraficoIntensidadeProps> = ({
  queimadas,
}) => {
  const labels = queimadas.map((q) => q.estado);
  const intensityData = queimadas.map((q) => {
    switch (q.intensidade) {
      case "baixo":
        return 1; 
      case "médio":
        return 2; 
      case "alto":
        return 3; 
      default:
        return 0; 
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Intensidade das Queimadas",
        data: intensityData,
        backgroundColor: queimadas.map(
          () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { 
        beginAtZero: true,
        title: {
          display: true,
          text: 'Nível de Intensidade',
        },
        ticks: {
          callback: (value: any) => {
            if (value === 1) return 'Baixo';
            if (value === 2) return 'Médio';
            if (value === 3) return 'Alto';
            return '';
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: 'Intensidade das Queimadas por Estado',
      },
    },
  };

  return (
    <Box width="100%" height="400px" mb={4}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GraficoIntensidade;
