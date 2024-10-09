// MapaQueimadas.tsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Queimada } from "../mock/QueimadasData";

interface MapaQueimadasProps {
  queimadas: Queimada[];
  onEstadoClick: (estado: string) => void;
}

const MapaQueimadas: React.FC<MapaQueimadasProps> = ({
  queimadas,
  onEstadoClick,
}) => {
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
    <Box height="85vh" width="100%">
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
              <button onClick={() => onEstadoClick(queimada.estado)}>
                Ver Gráfico de Municípios
              </button>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapaQueimadas;
