import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";
import QueimadasService from "../../api/QueimadasService";

const GraficoGeral: React.FC = () => {
  const [queimadasPorEstado, setQueimadasPorEstado] = useState<
    Map<string, number>
  >(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await QueimadasService.getAll();

        // Agrupar queimadas por estado
        const agrupamentoPorEstado = new Map<string, number>();
        data.forEach((q) => {
          const estado = q.Estado;
          if (agrupamentoPorEstado.has(estado)) {
            agrupamentoPorEstado.set(
              estado,
              agrupamentoPorEstado.get(estado)! + 1
            );
          } else {
            agrupamentoPorEstado.set(estado, 1);
          }
        });

        setQueimadasPorEstado(agrupamentoPorEstado);
      } catch (error) {
        console.error("Erro ao buscar dados das queimadas:", error);
      }
    };

    fetchData();
  }, []);

  const prepararDadosGrafico = () => {
    const estados = Array.from(queimadasPorEstado.keys());
    const incidencias = Array.from(queimadasPorEstado.values());

    return {
      labels: estados,
      datasets: [
        {
          label: "Número de Queimadas por Estado",
          data: incidencias,
          backgroundColor: estados.map(
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
    <Box>
      <Box className="chart-box" width="100%" height="400px" mb={4}>
        <Bar data={prepararDadosGrafico()} options={options} />
      </Box>
    </Box>
  );
};

export default GraficoGeral;
