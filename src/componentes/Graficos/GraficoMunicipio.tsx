import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Skeleton } from "@chakra-ui/react";
import "chart.js/auto";

interface Municipio {
  nome: string;
  quantidade: number;
}

interface GraficoMunicipiosPizzaProps {
  municipios: Municipio[];
  isLoading: boolean;
}

const GraficoMunicipiosPizza: React.FC<GraficoMunicipiosPizzaProps> = ({
  municipios,
  isLoading,
}) => {
  const data = {
    labels: municipios.map((m) => m.nome),
    datasets: [
      {
        data: municipios.map((m) => m.quantidade),
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

  return (
    <Box className="chart-box" width="100%" height="400px" mb={4}>
      {isLoading ? (
        <Skeleton height="400px" />
      ) : (
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      )}
    </Box>
  );
};

export default GraficoMunicipiosPizza;
