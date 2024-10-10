import React from "react";
import { Box, Flex, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2"; 
import SearchInput from "../Search/Search";
import { QueimadasData } from "../../mock/QueimadasData";

interface Municipio {
  nome: string;
  quantidade: number;
}

interface Queimada {
  estado: string;
  quantidade: number;
  diaSemChuva: number;
  intensidade: number;
  periodo: string;
  municipios: Municipio[];
}

const InformativoCard: React.FC = () => {
  const [isChartView, setIsChartView] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredData = QueimadasData.filter((queimada) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      queimada.estado.toLowerCase().includes(lowerCaseSearchTerm) ||
      queimada.municipios.some((municipio) =>
        municipio.nome.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });

  const generatePieChartData = (estadoData: Queimada) => ({
    labels: estadoData.municipios.map((municipio) => municipio.nome),
    datasets: [
      {
        label: "Quantidade de Queimadas por Município",
        data: estadoData.municipios.map((municipio) => municipio.quantidade),
        backgroundColor: estadoData.municipios.map(
          () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.6)`
        ),
      },
    ],
  });

  return (
    <Box py={4} position="relative">
      <Flex mb={4} alignItems="center">
        <SearchInput onSearch={setSearchTerm} />
        <Button
          ml={4}
          colorScheme={isChartView ? "teal" : "gray"}
          onClick={() => setIsChartView(!isChartView)} 
        >
          {isChartView ? "Ver Cards" : "Ver Gráfico de Pizza"}
        </Button>
      </Flex>

      {isChartView ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {filteredData.map((queimada, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              bgGradient="linear(to-br, #f7fafc, #e2e8f0)"
              textAlign="center"  
            >
              <Text fontWeight="bold" fontSize="lg" color="teal.600">
                {queimada.estado}
              </Text>
              <Box height="300px" width="300px" mx="auto">
                <Pie data={generatePieChartData(queimada)} />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {filteredData.map((queimada, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              m={2}
              p={4}
              bgGradient="linear(to-br, #f7fafc, #e2e8f0)"
              textAlign="center"
            >
              <Text fontWeight="bold" fontSize="lg" color="teal.600">
                {queimada.estado}
              </Text>
              <Text>
                <strong>Quantidade de Queimadas:</strong> {queimada.quantidade}
              </Text>
              <Text>
                <strong>Dias sem chuva:</strong> {queimada.diaSemChuva}
              </Text>
              <Text>
                <strong>Intensidade:</strong> {queimada.intensidade}
              </Text>
              <Text>
                <strong>Período:</strong> {queimada.periodo}
              </Text>
              <Text fontWeight="bold" mt={4} color="teal.600">
                Municípios Atingidos:
              </Text>
              <SimpleGrid columns={1} spacing={2}>
                {queimada.municipios.map((municipio, index) => (
                  <Text key={index}>
                    {municipio.nome} - {municipio.quantidade} queimadas
                  </Text>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default InformativoCard;
