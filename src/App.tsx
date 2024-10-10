import { Box, Tabs, Card, Flex } from "@chakra-ui/react";
import Navbar from "./componentes/Ui/NavBar";
import { QueimadasData } from "./mock/QueimadasData";
import SideBar from "./componentes/Ui/SideBar";
import Footer from "./componentes/Ui/Footer";

const App = () => {
  const queimadas = QueimadasData;

  return (
    <Card id="root" gap="0.3rem">
      <Box>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <Flex direction="column" height="100vh" gap="1rem">
            <Navbar />
            <SideBar queimadas={QueimadasData} />
            <Footer />
          </Flex>
        </Tabs>
      </Box>
    </Card>
  );
};

export default App;
