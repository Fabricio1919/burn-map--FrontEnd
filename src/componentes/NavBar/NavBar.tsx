// components/Navbar.tsx
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
      position="relative"
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold">
        Painel do Fogo
      </Text>
    </Flex>
  );
};

export default Navbar;
