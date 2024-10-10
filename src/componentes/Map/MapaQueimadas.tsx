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
import GraficoMunicipiosPizza from "../Graficos/GraficoMunicipio";
import { Queimada } from "../../mock/QueimadasData";

interface Municipio {
  nome: string;
  quantidade: number;
}

interface MapaQueimadasProps {
  queimadas: Queimada[];
  onEstadoClick: (estado: string) => void; // Adicionando onEstadoClick
}

const MapaQueimadas: React.FC<MapaQueimadasProps> = ({
  queimadas,
  onEstadoClick,
}) => {
  const [municipiosSelecionados, setMunicipiosSelecionados] = useState<
    Municipio[]
  >([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!queimadas || queimadas.length === 0) {
    return (
      <Box
        height="85vh"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg">Nenhuma queimada disponível para exibir.</Text>
      </Box>
    );
  }

  return (
    <Box height="85vh" width="100%" position="relative">
      <MapContainer
        center={[-3.4653, -62.2159]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{" "}
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
                  setMunicipiosSelecionados(queimada.municipios);
                  onOpen();
                  onEstadoClick(queimada.estado); // Chamando onEstadoClick para interação com estado
                }}
              >
                Ver Gráfico de Municípios
              </Button>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gráfico de Municípios</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GraficoMunicipiosPizza municipios={municipiosSelecionados} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MapaQueimadas;
