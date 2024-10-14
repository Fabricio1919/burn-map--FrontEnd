import React, { useRef, useEffect } from "react";
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
import { perguntas } from "./perguntas";

interface Mensagem {
  autor: string;
  texto: string;
}

const ChatDenuncias: React.FC = () => {
  const mensagensRef = useRef<Mensagem[]>([]);
  const mensagemRef = useRef<HTMLInputElement>(null);
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [perguntaIndex, setPerguntaIndex] = React.useState(0);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (isChatOpen) {
      enviarMensagem("Bot", perguntas[perguntaIndex]);
    }
  }, [isChatOpen, perguntaIndex]);

  const enviarMensagem = (autor: string, texto: string) => {
    mensagensRef.current.push({ autor, texto });
    forceUpdate();

    setTimeout(() => {
      const lastMessage = document.querySelector(".last-message");
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleResposta = () => {
    const mensagemTexto = mensagemRef.current?.value.trim();
    if (mensagemTexto) {
      enviarMensagem("Fabricio", mensagemTexto);
      mensagemRef.current!.value = "";

      if (perguntaIndex < perguntas.length - 1) {
        setPerguntaIndex(perguntaIndex + 1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleResposta();
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
            maxHeight="300px"
            overflowY="scroll"
            spacing={2}
            p={2}
            borderRadius="md"
            width="100%"
            height="250px"
            padding="10px"
            borderColor="#ccc"
          >
            {mensagensRef.current.length === 0 ? (
              <Text>Sem mensagens ainda</Text>
            ) : (
              mensagensRef.current.map((msg, index) => (
                <Flex
                  key={index}
                  justify={msg.autor === "Fabricio" ? "flex-end" : "flex-start"}
                  w="100%"
                >
                  <Box
                    bg={msg.autor === "Fabricio" ? "blue.200" : "green.100"}
                    p={1}
                    borderRadius="md"
                    className={
                      index === mensagensRef.current.length - 1
                        ? "last-message"
                        : ""
                    }
                  >
                    <Flex alignItems="center">
                      <Text fontWeight="bold" mr={2}>
                        {msg.autor}:
                      </Text>
                      <Text>{msg.texto}</Text>
                    </Flex>
                  </Box>
                </Flex>
              ))
            )}
          </VStack>

          <Flex>
            <Input
              ref={mensagemRef}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua resposta"
              bg="white"
              color="black"
              mr={2}
            />
            <Button colorScheme="blue" onClick={handleResposta}>
              Enviar
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ChatDenuncias;
