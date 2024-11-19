import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importação necessária
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
import { AMQ } from "../../api/types";
import QueimadasService from "../../api/QueimadasService";
import GraficoMunicipios from "../Graficos/GraficoMunicipio";
import ChatDenuncias from "./Charts/ChatDenuncias";

// Ícone personalizado
const redIcon = L.icon({
  iconUrl: "https://img.icons8.com/?size=100&id=24801&format=png&color=FA5252", // Você pode usar um ícone diferente ou customizado
  iconSize: [8, 8], // Tamanho bem pequeno para se assemelhar a um ponto
  iconAnchor: [4, 4], // Centraliza o ícone no ponto
  popupAnchor: [0, -4], // Ajusta a posição do popup
  shadowSize: [0, 0], // Sem sombra para manter o visual limpo
});

const MapaQueimadas: React.FC = () => {
  const [queimadas, setQueimadas] = useState<AMQ[]>([]);
  const [queimadaSelecionada, setQueimadaSelecionada] = useState<AMQ | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchQueimadas = async () => {
      try {
        const data = await QueimadasService.getAll();
        if (Array.isArray(data)) {
          const dadosFiltrados = data.filter(
            (queimada) =>
              queimada.Latitude !== undefined &&
              queimada.Longitude !== undefined &&
              typeof queimada.Latitude === "number" &&
              typeof queimada.Longitude === "number" &&
              queimada.Latitude >= -90 &&
              queimada.Latitude <= 90 &&
              queimada.Longitude >= -180 &&
              queimada.Longitude <= 180
          );

          const dadosOrdenados = dadosFiltrados.sort((a, b) => {
            const dataA = new Date(a.DataHora).getTime();
            const dataB = new Date(b.DataHora).getTime();
            return dataB - dataA;
          });

          const dadosLimitados = dadosOrdenados.slice(0, 1000);
          setQueimadas(dadosLimitados);
        } else {
          console.error("Os dados retornados não são um array:", data);
          setQueimadas([]);
        }
      } catch (error) {
        console.error("Erro ao buscar queimadas:", error);
        setQueimadas([]);
      }
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
          <Marker
            key={index}
            position={[queimada.Latitude, queimada.Longitude]}
            icon={redIcon} // Ícone vermelho
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
                  <strong>Estado:</strong> {queimada.Estado}
                </Text>
                <Text fontWeight="bold">
                  <strong>Dias sem chuva:</strong> {queimada.DiasSemChuva}
                </Text>
                <Text fontWeight="bold">
                  <strong>Intensidade:</strong> {queimada.FRP}
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
          </Marker>
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
