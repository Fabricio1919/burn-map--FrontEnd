// MapaQueimadas.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Queimada } from "../mock/QueimadasData";

interface MapaQueimadasProps {
  queimadas: Queimada[];
  onQueimadaClick: (queimada: Queimada) => void;
}

const MapaQueimadas: React.FC<MapaQueimadasProps> = ({
  queimadas,
  onQueimadaClick,
}) => {
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
            positions={queimada.coords as [number, number][]}
            pathOptions={{ fillColor: "red", color: "red", weight: 1 }}
            eventHandlers={{
              click: () => {
                onQueimadaClick(queimada);
              },
            }}
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
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapaQueimadas;
