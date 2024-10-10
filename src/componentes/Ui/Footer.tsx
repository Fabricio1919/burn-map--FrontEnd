import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      width="100%"
      bg="blue.500"
      color="white"
      py={4}
      position="fixed"
      bottom={0}
    >
      <Flex align="center" justify="space-between" mx="auto" px={4}>
        <Text>
          &copy; {new Date().getFullYear()} Seu Projeto. Todos os direitos
          reservados.
        </Text>
        <Flex>
          <Link href="#" color="teal.200">
            Política de Privacidade
          </Link>
          <Link href="#" color="teal.200">
            Termos de Uso
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
