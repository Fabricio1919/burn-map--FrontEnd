import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Heading size="lg">Mapeamento de Queimadas</Heading>
        <Flex>
          <Link px={4} color="white" href="/MapaQueimadas">
            MapaQueimadas
          </Link>
          <Link px={4} color="white" href="/Causas">
            Causas
          </Link>
          <Link px={4} color="white" href="/Conscientizacao">
            Conscientizacao
          </Link>
          <Link px={4} color="white" href="/GraficoPizza">
            GraficoPizza
          </Link>
          <Link px={4} color="white" href="/GraficoLinhas">
            GraficoLinhas
          </Link>
          <Link px={4} color="white" href="/GraficoBarras">
            GraficoBarras
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
