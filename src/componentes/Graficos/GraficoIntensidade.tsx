import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import QueimadasService from "../../api/QueimadasService"; 
import { Queimada } from "../../api/types"; 

const GraficoIntensidade: React.FC = () => {
  const [queimadasPorLote, setQueimadasPorLote] = useState<Queimada[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await QueimadasService.getAll();
        const dataOrdenada = data.sort((a, b) => b.precipita - a.precipita);
        const lotes = [];
        for (let i = 0; i < dataOrdenada.length; i += 25) {
          lotes.push(dataOrdenada.slice(i, i + 25));
        }
        setQueimadasPorLote(lotes);
      } catch (error) {
        console.error("Erro ao buscar dados das queimadas:", error);
      }
    };
    fetchData();
  }, []);

  const prepararDadosGrafico = (lote: Queimada[]) => {
    return {
      labels: lote.map((q) => q.municipio),
      datasets: [
        {
          label: "Precipitação (mm)",
          data: lote.map((q) => q.precipita), 
          backgroundColor: lote.map(
            () =>
              `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
              }, 0.6)`
          ),
        },
      ],
    };
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
    <Box>
      {queimadasPorLote.map((lote, index) => (
        <Box key={index} className="chart-box" width="100%" height="400px" mb={4}>
          <Bar data={prepararDadosGrafico(lote)} options={options} />
        </Box>
      ))}
    </Box>
  );
};

export default GraficoIntensidade;
