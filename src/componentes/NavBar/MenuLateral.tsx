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
import MapaQueimadas from "../MapaQueimadas";
import Causas from "../Causes";
import Conscientizacao from "../Conscientizacao";
import GraficoBarras from "../Graficos/GraficoBarras";
import GraficoLinhas from "../Graficos/GraficoLinhas";
import GraficoPizza from "../Graficos/GraficoPizza";
import { MdMap, MdAssessment, MdInfo, MdShowChart } from "react-icons/md";
import { Queimada } from "../../mock/QueimadasData";

interface MenuLateralProps {
  queimadas: Queimada[];
}

const MenuLateral: React.FC<MenuLateralProps> = ({ queimadas }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<string>("Mapa");
  const [selectedQueimada, setSelectedQueimada] = useState<Queimada | null>(
    null
  );

  const handleQueimadaClick = (queimada: Queimada) => {
    setSelectedQueimada(queimada);
    onOpen();
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
            onQueimadaClick={handleQueimadaClick}
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
        isOpen={!!selectedQueimada}
        onClose={() => setSelectedQueimada(null)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes da Queimada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedQueimada && (
              <VStack spacing={4} align="start">
                <Text fontWeight="bold">Estado:</Text>
                <Text>{selectedQueimada.estado}</Text>
                <Text fontWeight="bold">Dias sem chuva:</Text>
                <Text>{selectedQueimada.diaSemChuva}</Text>
                <Text fontWeight="bold">Intensidade:</Text>
                <Text>{selectedQueimada.intensidade}</Text>
                <Text fontWeight="bold">Quantidade de queimadas:</Text>
                <Text>{selectedQueimada.quantidade}</Text>
                <Text fontWeight="bold">Período:</Text>
                <Text>{selectedQueimada.periodo}</Text>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuLateral;
