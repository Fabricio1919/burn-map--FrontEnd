import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import QueimadasService from "../../api/QueimadasService"; 
import { Queimada } from "../../api/types"; 

const GraficoIntensidade: React.FC = () => {
  const [queimadas, setQueimadas] = useState<Queimada[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await QueimadasService.getAll();
      setQueimadas(data);
    };

    fetchData();
  }, []);

  const labels = queimadas.map((q) => q.municipio);
  const precipitaData = queimadas.map((q) => q.precipita);

  const data = {
    labels,
    datasets: [
      {
        label: "Precipitação (mm)",
        data: precipitaData,
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
          text: 'Precipitação (mm)',
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: 'Precipitação das Queimadas por Municipio',
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
