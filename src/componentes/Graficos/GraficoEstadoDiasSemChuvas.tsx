import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";
import QueimadasService from "../../api/QueimadasService";
import { AMQ } from "../../api/types";

const GraficoDiasSemChuvas: React.FC = () => {
  const [queimadasPorLote, setQueimadasPorLote] = useState<AMQ[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await QueimadasService.fetchQueimadasData();
        const dataOrdenada = data.sort(
          (a, b) => b.DiasSemChuva - a.DiasSemChuva
        );
        const lotes = [];
        for (let i = 0; i < dataOrdenada.length; i += 25) {
          lotes.push(dataOrdenada.slice(i, i + 25));
        }
        setQueimadasPorLote(lotes);
      } catch (error) {
        console.error("Erro ao carregar os dados das queimadas:", error);
      }
    };
    fetchData();
  }, []);

  const prepararDadosGrafico = (lote: AMQ[]) => ({
    labels: lote.map((q) => q.Municipio),
    datasets: [
      {
        label: "Dias sem Chuva",
        data: lote.map((q) => q.DiasSemChuva || 0),
        backgroundColor: lote.map(
          () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.6)`
        ),
      },
    ],
  });

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
        text: "Dias sem Chuva por Município",
      },
    },
  };

  return (
    <Box>
      {queimadasPorLote.map((lote, index) => (
        <Box key={index} width="100%" height="400px" mb={4}>
          <Bar data={prepararDadosGrafico(lote)} options={options} />
        </Box>
      ))}
    </Box>
  );
};

export default GraficoDiasSemChuvas;
