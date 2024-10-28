import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="blue.500"
      p={4}
      color="white"
      align="center"
      justify="center"
      position="fixed" // Altera para "fixed"
      top={0} // Define a posição no topo
      width="100%" // Garante que o Navbar ocupe toda a largura
      boxShadow="md"
      zIndex={1000} // Define um zIndex alto para que o Navbar fique acima dos outros elementos
    >
      <Text fontSize="xl" fontWeight="bold">
        Painel do Fogo
      </Text>
    </Flex>
  );
};

export default Navbar;
