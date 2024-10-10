import {
  Box,
  Heading,
  Stack,
  Icon,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

const causasMessages = [
  "As queimadas na Amazônia são impulsionadas por uma série de fatores naturais e atividades humanas. Entre as principais causas antropogênicas, destaca-se o desmatamento ilegal, onde vastas áreas de floresta são incendiadas para a expansão de atividades agrícolas e pecuárias. Além disso, a prática de queimadas controladas para limpeza de terrenos é uma abordagem comumente adotada, mas que traz consequências devastadoras.",
  "Mudanças climáticas e secas prolongadas exacerbam o problema, aumentando a vulnerabilidade das florestas ao fogo. A combinação dessas práticas destrutivas e os eventos climáticos extremos criam um ambiente propício para a propagação de incêndios em larga escala, comprometendo ainda mais a saúde do nosso ecossistema.",
];

const Causas = () => {
  return (
    <Box
      p={8}
      w={{ base: "90vw", md: "70vw" }}
      h={{ base: "80vh", md: "70vh" }}
      mx="auto"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      _hover={{ boxShadow: "2xl" }}
      transition="0.3s"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Stack direction="row" align="center" mb={6}>
        <Icon as={FiAlertCircle} w={10} h={10} color="red.500" />
        <Heading as="h2" size="xl" fontWeight="bold" color="green.600">
          Principais Causas das Queimadas
        </Heading>
      </Stack>
      <Divider mb={6} />

      <List spacing={6} mb={6} textAlign="center">
        {causasMessages.map((message, index) => (
          <ListItem
            key={index}
            fontSize="lg"
            fontWeight="medium"
            lineHeight="tall"
            color="gray.800"
            _hover={{ color: "green.600", transform: "scale(1.05)" }}
            transition="0.2s"
          >
            {message}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Causas;
