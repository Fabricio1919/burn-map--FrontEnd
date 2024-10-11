// ChatDenuncias.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChatIcon, CloseIcon } from "@chakra-ui/icons";

interface Mensagem {
  autor: string;
  texto: string;
}

const ChatDenuncias: React.FC = () => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [mensagem, setMensagem] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const enviarMensagem = () => {
    if (mensagem.trim() !== "") {
      setMensagens([...mensagens, { autor: "Usuário", texto: mensagem }]);
      setMensagem("");
    }
  };

  return (
    <Box position="relative" zIndex="1000">
      <IconButton
        aria-label="Abrir Chat"
        icon={isChatOpen ? <CloseIcon /> : <ChatIcon />}
        colorScheme="teal"
        position="absolute"
        bottom="20px"
        right="20px"
        onClick={() => setIsChatOpen(!isChatOpen)}
      />

      {isChatOpen && (
        <Box
          position="absolute"
          bottom="80px"
          right="20px"
          width="300px"
          height="350px"
          bg="white"
          boxShadow="md"
          borderRadius="md"
          p={4}
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Denúncias de Queimadas
          </Text>
          <VStack
            maxHeight="200px"
            overflowY="scroll"
            spacing={2}
            // bg="gray.600"
            p={2}
            borderRadius="md"
            width="100%"
            height="250px"
            padding="10px"
            borderColor="#ccc"
          >
            {mensagens.length === 0 ? (
              <Text>Sem mensagens ainda</Text>
            ) : (
              mensagens.map((msg, index) => (
                <Flex key={index} justify="flex-start" w="100%">
                  <Box bg="blue.100" p={1} borderRadius="md">
                    <Text fontWeight="bold">{msg.autor}</Text>
                    <Text>{msg.texto}</Text>
                  </Box>
                </Flex>
              ))
            )}
          </VStack>

          <Flex mt={10}>
            <Input
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Digite sua denúncia"
              bg="white"
              color="black"
              mr={2}
            />
            <Button colorScheme="blue" onClick={enviarMensagem}>
              Enviar
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ChatDenuncias;
