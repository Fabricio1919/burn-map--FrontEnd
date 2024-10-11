import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Queimada } from "../../mock/QueimadasData";

interface GraficoIntensidadeProps {
  queimada: Queimada;
}

const GraficoIntensidade: React.FC<GraficoIntensidadeProps> = ({
  queimada,
}) => {
  const data = {
    labels: queimada.municipios.map((municipio) => municipio.nome),
    datasets: [
      {
        label: "Intensidade das Queimadas",
        data: queimada.municipios.map((municipio) => municipio.quantidade),
        backgroundColor: queimada.municipios.map(
          () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.6)`
        ),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `Estado: ${queimada.estado} | Intensidade Total: ${queimada.intensidade}`,
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
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GraficoIntensidade;
