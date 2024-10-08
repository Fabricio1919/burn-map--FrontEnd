import React from "react";
import { Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Queimada {
  latitude: number;
  longitude: number;
  municipio: string;
  estado: string;
  diaSemChuva: number;
}

interface MapaQueimadasProps {
  queimadas: Queimada[];
}

const MapaQueimadas: React.FC<MapaQueimadasProps> = ({ queimadas }) => {
  return (
    <Box height="80vh" width="100%">
      <MapContainer
        center={[-3.4653, -62.2159]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {queimadas.map((queimada, index) => (
          <Marker
            key={index}
            position={[queimada.latitude, queimada.longitude]}
          >
            <Popup>
              <strong>Município:</strong> {queimada.municipio}
              <br />
              <strong>Estado:</strong> {queimada.estado}
              <br />
              <strong>Dias sem chuva:</strong> {queimada.diaSemChuva}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapaQueimadas;
