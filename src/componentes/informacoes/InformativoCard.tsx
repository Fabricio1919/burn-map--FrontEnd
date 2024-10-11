import React from "react";
import { Box, Flex, SimpleGrid, Button, Skeleton } from "@chakra-ui/react";
import SearchInput from "../Search/Search";
import {
  QueimadasData,
  Queimada as QueimadaData,
} from "../../mock/QueimadasData";
import GraficoBarras from "../Graficos/GraficoGeral";
import GraficoMunicipios from "../Graficos/GraficoMunicipio";
import GraficoPizza from "../Graficos/GraficoPizza";
import GraficoPizzaEstado from "../Graficos/GraficoEstado";
import GraficoDiasSemChuvas from "../Graficos/GraficoDiasSemChuvas";

export interface Queimada extends QueimadaData {
  diasSemChuvas: number;
}

const InformativoCard: React.FC = () => {
  const [chartType, setChartType] = React.useState("Estado");
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
              if (prev === "Estado") return "geral";
              if (prev === "geral") return "diasSemChuvas";
              if (prev === "diasSemChuvas") return "Municipios";
              if (prev === "Municipios") return "GraficoPizza";
              if (prev === "GraficoPizza") return "Estado";
              return "Estado";
            });
          }}
        >
          Mudar Gráfico
        </Button>
      </Flex>

      {isLoading ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
            >
              <Skeleton height="20px" mb={2} />
              <Skeleton height="300px" />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          {chartType === "Estado" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {filteredData.map((queimada, index) => (
                <GraficoPizzaEstado key={index} queimada={queimada} />
              ))}
            </SimpleGrid>
          )}

          {chartType === "geral" && (
            <GraficoBarras queimadas={filteredData} isLoading={isLoading} />
          )}

          {chartType === "diasSemChuvas" && (
            <GraficoDiasSemChuvas
              queimadas={filteredData}
              isLoading={isLoading}
            />
          )}

          {chartType === "Municipios" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {filteredData.map((queimada, index) => (
                <GraficoMunicipios key={index} queimada={queimada} />
              ))}
            </SimpleGrid>
          )}

          {chartType === "GraficoPizza" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {filteredData.map((queimada, index) => (
                <GraficoPizza
                  key={index}
                  municipios={queimada.municipios}
                  isLoading={isLoading}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default InformativoCard;
