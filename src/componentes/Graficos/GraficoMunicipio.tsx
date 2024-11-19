import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import QueimadasService from "../../api/QueimadasService";
import { AMQ } from "../../api/types";

const GraficoMunicipios: React.FC = () => {
  const [dadosPorEstado, setDadosPorEstado] = useState<{
    [estado: string]: AMQ[];
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await QueimadasService.getAll();

        // Agrupar os dados por estado
        const dadosAgrupadosPorEstado = data.reduce(
          (acc: { [estado: string]: AMQ[] }, curr: AMQ) => {
            const estado = curr.Estado;
            if (!acc[estado]) {
              acc[estado] = [];
            }
            acc[estado].push(curr);
            return acc;
          },
          {}
        );

        setDadosPorEstado(dadosAgrupadosPorEstado);
      } catch (error) {
        console.error("Erro ao buscar dados das queimadas:", error);
      }
    };
    fetchData();
  }, []);

  const prepararDadosGrafico = (municipios: AMQ[]) => {
    return {
      labels: municipios.map((q) => q.Municipio),
      datasets: [
        {
          label: "Número de Queimadas",
          data: municipios.map((q) => q.FRP),
          backgroundColor: municipios.map(
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
      {Object.keys(dadosPorEstado).map((estado) => (
        <Box key={estado} p={4} borderWidth="1px" borderRadius="md" mb={4}>
          <h3>
            <strong>Estado:</strong> {estado}
          </h3>
          <SimpleGrid columns={[1, 2]} spacing={6} width="100%">
            {dadosPorEstado[estado].map((municipioData, index) => (
              <Box
                key={index}
                className="chart-box"
                width="100%"
                height="400px"
                boxShadow="md"
                p={4}
              >
                <Pie
                  data={prepararDadosGrafico([municipioData])}
                  options={options}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default GraficoMunicipios;
