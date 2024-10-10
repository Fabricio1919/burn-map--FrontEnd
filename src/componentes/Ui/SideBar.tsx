import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Causas from "../../Pages/Causes";
import Conscientizacao from "../../Pages/Conscientizacao";
import GraficoLinhas from "../Graficos/GraficoLinhas";
import GraficoPizza from "../Graficos/GraficoPizza";
import { MdMap, MdAssessment, MdInfo, MdShowChart } from "react-icons/md";
import { Queimada } from "../../mock/QueimadasData";
import GraficoBarras from "../Graficos/GraficoBarras";
import MapaQueimadas from "../Map/MapaQueimadas";

interface MenuLateralProps {
  queimadas: Queimada[];
}

const SideBar: React.FC<MenuLateralProps> = ({ queimadas }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<string>("Mapa");

  const [municipioData, setMunicipioData] = useState<Queimada[]>([]);
  const [isMunicipioModalOpen, setIsMunicipioModalOpen] = useState(false);

  const handleEstadoClick = (estado: string) => {
    const municipios = queimadas.filter((q) => q.estado === estado);
    setMunicipioData(municipios);
    setIsMunicipioModalOpen(true);
  };

  return (
    <>
      <IconButton
        aria-label="Abrir Menu"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        position="absolute"
        top="1rem"
        left="1rem"
        zIndex={1000}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="235px" bg="gray.800" color="white" boxShadow="lg">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            fontSize="lg"
            bg="gray.700"
            borderBottomWidth={1}
            borderColor="gray.600"
            textAlign="center"
          >
            Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4} fontSize="sm">
              <Button
                variant="outline"
                leftIcon={<MdMap size={20} />}
                onClick={() => setActiveTab("Mapa")}
                _hover={{ bg: "gray.600", borderColor: "cyan.400" }}
                _active={{ bg: "cyan.500", color: "white" }}
                width="full"
                borderColor="gray.600"
                borderWidth={1}
                transition="background-color 0.2s ease, border-color 0.2s ease"
                fontSize="sm"
                color="white"
                justifyContent="flex-start"
              >
                Mapa de Queimadas
              </Button>
              <Button
                variant="outline"
                leftIcon={<MdInfo size={20} />}
                onClick={() => setActiveTab("Causas")}
                _hover={{ bg: "gray.600", borderColor: "cyan.400" }}
                _active={{ bg: "cyan.500", color: "white" }}
                width="full"
                borderColor="gray.600"
                borderWidth={1}
                transition="background-color 0.2s ease, border-color 0.2s ease"
                fontSize="sm"
                color="white"
                justifyContent="flex-start"
              >
                Causas
              </Button>
              <Button
                variant="outline"
                leftIcon={<MdAssessment size={20} />}
                onClick={() => setActiveTab("Conscientizacao")}
                _hover={{ bg: "gray.600", borderColor: "cyan.400" }}
                _active={{ bg: "cyan.500", color: "white" }}
                width="full"
                borderColor="gray.600"
                borderWidth={1}
                transition="background-color 0.2s ease, border-color 0.2s ease"
                fontSize="sm"
                color="white"
                justifyContent="flex-start"
              >
                Conscientização
              </Button>
              <Button
                variant="outline"
                leftIcon={<MdShowChart size={20} />}
                onClick={() => setActiveTab("Graficos")}
                _hover={{ bg: "gray.600", borderColor: "cyan.400" }}
                _active={{ bg: "cyan.500", color: "white" }}
                width="full"
                borderColor="gray.600"
                borderWidth={1}
                transition="background-color 0.2s ease, border-color 0.2s ease"
                fontSize="sm"
                color="white"
                justifyContent="flex-start"
              >
                Gráficos
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div>
        {activeTab === "Mapa" && (
          <MapaQueimadas
            queimadas={queimadas}
            onEstadoClick={handleEstadoClick}
          />
        )}
        {activeTab === "Causas" && <Causas />}
        {activeTab === "Conscientizacao" && <Conscientizacao />}
        {activeTab === "Graficos" && (
          <>
            <GraficoBarras queimadas={queimadas} />
            <GraficoLinhas queimadas={queimadas} />
            <GraficoPizza queimadas={queimadas} />
          </>
        )}
      </div>

      <Modal
        isOpen={isMunicipioModalOpen}
        onClose={() => setIsMunicipioModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gráfico de Queimadas por Município</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold">Municípios afetados:</Text>
            <VStack spacing={2} align="start">
              {municipioData.map((queimada, idx) => (
                <VStack key={idx} spacing={1} align="start">
                  {queimada.municipios.map((municipio) => (
                    <Text key={municipio.nome}>
                      {municipio.nome}: {municipio.quantidade} queimadas
                    </Text>
                  ))}
                </VStack>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SideBar;
