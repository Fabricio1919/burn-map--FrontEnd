import React from "react";
import { Box, Flex, SimpleGrid, Button, Skeleton } from "@chakra-ui/react";
import SearchInput from "../Search/Search";
import { QueimadasData, Queimada as QueimadaData } from "../../mock/QueimadasData";
import GraficoBarras from "../Graficos/GraficoGeral";
import GraficoLinhas from "../Graficos/GraficoLinhas";
import GraficoMunicipiosPizza from "../Graficos/GraficoMunicipio";
import GraficoPizza from "../Graficos/GraficoPizza";
import GraficoPizzaEstado from "../Graficos/GraficoEstado";

export interface Queimada extends QueimadaData {
  diasSemChuvas: number; // Certifique-se de que essa propriedade está correta
}

const InformativoCard: React.FC = () => {
  const [chartType, setChartType] = React.useState("pizza");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const filteredData = QueimadasData.filter((queimada) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      queimada.estado.toLowerCase().includes(lowerCaseSearchTerm) ||
      queimada.municipios.some((municipio) =>
        municipio.nome.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });
  

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box py={4} position="relative">
      <Flex mb={4} alignItems="center">
        <SearchInput onSearch={setSearchTerm} />
        <Button
          ml={4}
          colorScheme="teal"
          onClick={() => {
            setChartType((prev) => {
              if (prev === "pizza") return "barras";
              if (prev === "barras") return "linhas";
              if (prev === "linhas") return "pizzaMunicipios";
              if (prev === "pizzaMunicipios") return "pizza";
              return "pizza"; // Valor padrão
            });
          }}
        >
          Mudar Gráfico
        </Button>
      </Flex>

      {isLoading ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
              <Skeleton height="20px" mb={2} />
              <Skeleton height="300px" />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          {chartType === "pizza" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {filteredData.map((queimada, index) => (
                <GraficoPizzaEstado key={index} queimada={queimada} />
              ))}
            </SimpleGrid>
          )}

          {chartType === "barras" && (
            <GraficoBarras queimadas={filteredData} isLoading={isLoading} />
          )}

          {chartType === "linhas" && (
            <GraficoLinhas queimadas={filteredData} isLoading={isLoading} />
          )}

          {chartType === "pizzaMunicipios" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {filteredData.map((queimada, index) => (
                <GraficoMunicipiosPizza
                  key={index}
                  municipios={queimada.municipios}
                  isLoading={isLoading}
                />
              ))}
            </SimpleGrid>
          )}

          {chartType === "pizza" && (
            <GraficoPizza queimadas={filteredData} isLoading={isLoading} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default InformativoCard;
