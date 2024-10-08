import React from "react";
import { Pie } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";

interface Queimada {
  municipio: string;
}

interface GraficoPizzaProps {
  queimadas: Queimada[];
}

const GraficoPizza: React.FC<GraficoPizzaProps> = ({ queimadas }) => {
  const data = {
    labels: queimadas.map((q) => q.municipio),
    datasets: [
      {
        data: queimadas.map(() => Math.floor(Math.random() * 100) + 50),
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
    <Box width="100%" height="400px">
      <Pie data={data} />
    </Box>
  );
};

export default GraficoPizza;
