import React from "react";
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdMap, MdAssessment, MdInfo, MdShowChart } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <DrawerContent maxW="235px" bg="blue.800" color="white" boxShadow="lg">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            fontSize="lg"
            bg="blue.700"
            borderBottomWidth={1}
            borderColor="gray.600"
            textAlign="center"
          >
            Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4} fontSize="sm">
              <Link to="/">
                <Button
                  variant="outline"
                  leftIcon={<MdMap size={20} />}
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
              </Link>
              <Link to="/causas">
                <Button
                  variant="outline"
                  leftIcon={<MdInfo size={20} />}
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
              </Link>
              <Link to="/conscientizacao">
                <Button
                  variant="outline"
                  leftIcon={<MdAssessment size={20} />}
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
              </Link>
              <Link to="/graficos">
                <Button
                  variant="outline"
                  leftIcon={<MdShowChart size={20} />}
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
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
