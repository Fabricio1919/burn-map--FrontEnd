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
    <Box height="100%" width="100%">
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
            pathOptions={{ fillColor: "red", color: "red", weight: 1 }}
          >
            <Popup>
              <strong>Estado:</strong> {queimada.estado}
              <br />
              <strong>Dias sem chuva:</strong> {queimada.diaSemChuva}
              <br />
              <strong>Intensidade:</strong> {queimada.intensidade}
              <br />
              <strong>Quantidade de queimadas:</strong> {queimada.quantidade}
              <br />
              <strong>Período:</strong> {queimada.periodo}
              <br />
              <strong>Municípios afetados:</strong>
              <ul>
                {queimada.municipios.map((municipio, idx) => (
                  <li key={idx}>
                    {municipio.nome}: {municipio.quantidade} queimadas
                  </li>
                ))}
              </ul>
              <Button
                colorScheme="blue"
                onClick={() => {
                  setQueimadaSelecionada(queimada);
                  onOpen();
                }}
              >
                Ver Gráfico de Municípios
              </Button>
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
    </Box>
  );
};

export default MapaQueimadas;
