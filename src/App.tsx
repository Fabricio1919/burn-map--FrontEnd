import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
} from "@chakra-ui/react";
import Conscientizacao from "./componentes/Conscientizacao";
import Navbar from "./componentes/NavBar/NavBar";
import GraficoBarras from "./componentes/Graficos/GraficoBarras";
import GraficoLinhas from "./componentes/Graficos/GraficoLinhas";
import GraficoPizza from "./componentes/Graficos/GraficoPizza";
import MapaQueimadas from "./componentes/Maps";
import Causas from "./componentes/Causes";
import { useState } from "react";
import QueimadasData from "./mock/QueimadasData";

const App = () => {
  const [queimadas] = useState(QueimadasData);

  return (
    <Card id="root" gap="0.3rem">
      <Navbar />
      <Box className="main-content">
        <Tabs variant="soft-rounded" colorScheme="teal" mt={4} ml={4}>
          <TabList ml={3}>
            <Tab>Mapa</Tab>
            <Tab>Causas</Tab>
            <Tab>Conscientização</Tab>
            <Tab>Gráficos</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <MapaQueimadas queimadas={queimadas} />
            </TabPanel>
            <TabPanel>
              <Causas />
            </TabPanel>
            <TabPanel>
              <Conscientizacao />
            </TabPanel>
            <TabPanel>
              <GraficoBarras queimadas={queimadas} />
              <GraficoLinhas queimadas={queimadas} />
              <GraficoPizza queimadas={queimadas} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Card>
  );
};

export default App;
