import { Box, Heading, Text } from "@chakra-ui/react";

const Causas = () => {
  return (
    <Box p={6}>
      <Heading as="h2" size="xl" mb={4}>
        Causas das Queimadas
      </Heading>
      <Text fontSize="lg">
        As queimadas na Amazônia podem ser causadas por uma combinação de
        fatores naturais e humanos. Entre as causas mais comuns estão o
        desmatamento ilegal, a expansão agrícola e a prática de queimadas para
        limpar terrenos. Mudanças climáticas e secas prolongadas também aumentam
        a incidência de incêndios florestais.
      </Text>
    </Box>
  );
};

export default Causas;
