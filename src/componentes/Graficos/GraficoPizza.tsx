import React from "react";
import { Pie } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  estado: string;
  quantidade: number;
}

interface GraficoPizzaProps {
  queimadas: Queimada[];
}

const GraficoPizza: React.FC<GraficoPizzaProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.estado),
    datasets: [
      {
        data: queimadas.map((q) => q.quantidade),
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
      <Pie
        data={data}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </Box>
  );
};

export default GraficoPizza;
