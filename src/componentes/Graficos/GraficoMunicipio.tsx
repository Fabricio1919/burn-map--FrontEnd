import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react"; 
import { Pie } from "react-chartjs-2";
import QueimadasService from "../../api/QueimadasService"; 
import { Queimada } from "../../api/types"; 

const GraficoMunicipios: React.FC = () => {
  const [queimadasPorLote, setQueimadasPorLote] = useState<Queimada[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await QueimadasService.getAll();
        const dataOrdenada = data.sort((a, b) => b.frp - a.frp);
        const lotes = [];
        for (let i = 0; i < dataOrdenada.length; i += 10) {
          lotes.push(dataOrdenada.slice(i, i + 10));
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
          label: "Número de Queimadas",
          data: lote.map((q) => q.frp), 
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
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Número de Queimadas por Município",
      },
    },
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <SimpleGrid columns={[1, 2]} spacing={6} width="100%"> 
        {queimadasPorLote.map((lote, index) => (
          <Box
            key={index}
            className="chart-box"
            width="100%"
            height="400px"
            boxShadow="md" 
            p={4} 
          >
            <Pie data={prepararDadosGrafico(lote)} options={options} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GraficoMunicipios;
