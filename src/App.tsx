import { Box, Tabs, Card, Flex } from "@chakra-ui/react";
import Navbar from "./componentes/NavBar/NavBar";
import { QueimadasData } from "./mock/QueimadasData";
import MenuLateral from "./componentes/NavBar/MenuLateral";

const App = () => {
  const queimadas = QueimadasData;

  return (
    <Card id="root" gap="0.3rem">
      <Box>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <Flex direction="column" height="100vh" gap="1rem">
            <Navbar />
            <MenuLateral queimadas={QueimadasData} />
          </Flex>
        </Tabs>
      </Box>
    </Card>
  );
};

export default App;
