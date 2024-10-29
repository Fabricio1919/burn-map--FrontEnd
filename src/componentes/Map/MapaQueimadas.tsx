import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Queimada } from "../../api/types";
import QueimadasService from "../../api/QueimadasService"; 
import GraficoMunicipios from "../Graficos/GraficoMunicipio";
import ChatDenuncias from "./Charts/ChatDenuncias";

const MapaQueimadas: React.FC = () => {
  const [queimadas, setQueimadas] = useState<Queimada[]>([]);
  const [queimadaSelecionada, setQueimadaSelecionada] = useState<Queimada | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchQueimadas = async () => {
      const data = await QueimadasService.getAll();
      setQueimadas(data);
    };
    fetchQueimadas();
  }, []);

  if (!queimadas || queimadas.length === 0) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg">Nenhuma queimada disponível para exibir.</Text>
      </Box>
    );
  }

  return (
    <Box height="100%" width="100%" position="relative">
      <MapContainer
        center={[-3.4653, -62.2159]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {queimadas.map((queimada, index) => (
          <Polygon
            key={index}
            positions={[[queimada.latitude, queimada.longitude]]} 
            pathOptions={{
              fillColor: "red",
              color: "red",
              weight: 1,
              fillOpacity: 0.7,
            }}
          >
            <Popup>
              <Box
                p={3}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                _hover={{ color: "green.600", transform: "scale(1.05)" }}
                transition="0.2s"
              >
                <Text fontWeight="bold">
                  <strong>Estado:</strong> {queimada.estado}
                </Text>
                <Text fontWeight="bold">
                  <strong>Dias sem chuva:</strong> {queimada.dias_sem_chuva}
                </Text>
                <Text fontWeight="bold">
                  <strong>Intensidade:</strong> {queimada.frp} 
                </Text>
                <Button
                  colorScheme="blue"
                  mt={2}
                  onClick={() => {
                    setQueimadaSelecionada(queimada);
                    onOpen();
                  }}
                >
                  Ver Gráfico de Municípios
                </Button>
              </Box>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      {queimadaSelecionada && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Gráfico de Municípios</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <GraficoMunicipios />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      <Box position="absolute" bottom="0" right="0" zIndex="1000">
        <ChatDenuncias />
      </Box>
    </Box>
  );
};

export default MapaQueimadas;
