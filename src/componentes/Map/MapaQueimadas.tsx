import React, { useState } from "react";
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

import { Queimada } from "../../mock/QueimadasData";
import GraficoMunicipios from "../Graficos/GraficoMunicipio";
import ChatDenuncias from "./Charts/ChatDenuncias";

interface MapaQueimadasProps {
  queimadas: Queimada[];
}

const MapaQueimadas: React.FC<MapaQueimadasProps> = ({ queimadas }) => {
  const [queimadaSelecionada, setQueimadaSelecionada] =
    useState<Queimada | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Box height="90%" width="100%" position="relative">
      <MapContainer
        center={[-3.4653, -62.2159]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {queimadas.map((queimada, index) => (
          <Polygon
            key={index}
            positions={queimada.coords}
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
                  <strong>Dias sem chuva:</strong> {queimada.diaSemChuva}
                </Text>
                <Text fontWeight="bold">
                  <strong>Intensidade:</strong> {queimada.intensidade}
                </Text>
                <Text fontWeight="bold">
                  <strong>Quantidade de queimadas:</strong>{" "}
                  {queimada.quantidade}
                </Text>
                <Text fontWeight="bold">
                  <strong>Período:</strong> {queimada.periodo}
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
              <GraficoMunicipios queimada={queimadaSelecionada} />
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
