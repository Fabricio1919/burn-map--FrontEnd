import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Stack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";

const conscientizacaoMessages = [
  "As queimadas não apenas devastam ecossistemas, mas também contribuem significativamente para o aumento das emissões de gases de efeito estufa, intensificando as mudanças climáticas que enfrentamos.",
  "As comunidades indígenas e locais são as mais afetadas por essas queimadas, sofrendo a perda de suas terras e meios de subsistência, o que ameaça sua cultura e modo de vida.",
  "A conscientização e a mobilização da sociedade são essenciais para garantir a proteção das florestas, promovendo um futuro sustentável para o nosso planeta.",
];

const Conscientizacao = () => {
  return (
    <Box
      p={10}
      w={{ base: "90vw", md: "80vw" }}
      h={{ base: "80vh", md: "70vh" }}
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
        <Icon as={FiBookOpen} w={10} h={10} color="blue.500" />
        <Heading as="h2" size="xl" fontWeight="bold" color="green.600">
          Conscientização sobre as Queimadas
        </Heading>
      </Stack>
      <Divider mb={6} />

      <List spacing={6} mb={6} textAlign="center">
        {conscientizacaoMessages.map((message, index) => (
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

      <Text fontSize="lg" textAlign="center" color="gray.600" mt={4}>
        Para saber mais e descobrir como ajudar, acesse o
        <Link
          href="https://www.wwf.org.br"
          color="teal.500"
          fontWeight="bold"
          isExternal
          _hover={{ textDecoration: "underline", color: "teal.600" }}
        >
          WWF Brasil
        </Link>
        .
      </Text>
    </Box>
  );
};

export default Conscientizacao;
