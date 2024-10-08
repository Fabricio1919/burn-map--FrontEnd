import { Box, Heading, Text, Link, List, ListItem } from "@chakra-ui/react";

const conscientizacaoMessages = [
  "As queimadas na Amazônia têm graves consequências para o meio ambiente,contribuindo para a destruição da biodiversidade, emissão de gases de   efeito estufa e impacto direto nas comunidades indígenas e locais.",
  "A preservação da Amazônia é crucial para a biodiversidade e o equilíbrio climático.",
  "A conscientização sobre os impactos das queimadas pode ajudar a reduzir sua ocorrência.",
  "A participação da comunidade é vital para a proteção das florestas.",
];

const Conscientizacao = () => {
  return (
    <Box p={6}>
      <Heading as="h2" size="xl" mb={4}>
        Conscientização sobre as Queimadas
      </Heading>

      <List spacing={3}>
        {conscientizacaoMessages.map((message, index) => (
          <ListItem key={index} fontSize="lg">
            {message}
          </ListItem>
        ))}
      </List>
      <Text fontSize="lg">
        Para saber mais sobre como você pode ajudar, visite
        <Link href="https://www.wwf.org.br" color="teal.500" isExternal>
          {" "}
          WWF Brasil
        </Link>
        .
      </Text>
    </Box>
  );
};

export default Conscientizacao;
