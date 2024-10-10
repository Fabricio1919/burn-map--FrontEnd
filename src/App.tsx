import { Box, Card, Flex, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Ui/NavBar";
import { QueimadasData } from "./mock/QueimadasData";
import SideBar from "./componentes/Ui/SideBar";
import Footer from "./componentes/Ui/Footer";
import MapaQueimadas from "./componentes/Map/MapaQueimadas";
import Causas from "./Pages/Causes";
import Conscientizacao from "./Pages/Conscientizacao";
import GraficoBarras from "./componentes/Graficos/GraficoBarras";
import GraficoLinhas from "./componentes/Graficos/GraficoLinhas";
import GraficoPizza from "./componentes/Graficos/GraficoPizza";
import InformativoCard from "./componentes/informacoes/InformativoCard";
import { SplashScreen } from "./componentes/SplashScren/SplashScren";

const App = () => {
  const [showSplash, setShowSplash] = useState(true); 

  const startTimer = () => {
    setTimeout(() => {
      setShowSplash(false); 
    }, 1000); 
  };

  if (showSplash) {
    startTimer();
    return <SplashScreen />; 
  }

  return (
    <Router>
      <Card id="root">
        <Tabs variant="soft-rounded" colorScheme="teal">
          <Flex direction="column" height="100vh" gap="0.1rem">
            <Navbar />
            <SideBar />
            <Box flex="1">
              <Routes>
                <Route
                  path="/"
                  element={<MapaQueimadas queimadas={QueimadasData} />}
                />
                <Route path="/InformativoCard" element={<InformativoCard />} />
                <Route path="/causas" element={<Causas />} />
                <Route path="/conscientizacao" element={<Conscientizacao />} />
                <Route path="/graficos">
                  <Route
                    index
                    element={<GraficoBarras queimadas={QueimadasData} />}
                  />
                  <Route
                    path="linhas"
                    element={<GraficoLinhas queimadas={QueimadasData} />}
                  />
                  <Route
                    path="pizza"
                    element={<GraficoPizza queimadas={QueimadasData} />}
                  />
                </Route>
              </Routes>
            </Box>
            <Footer />
          </Flex>
        </Tabs>
      </Card>
    </Router>
  );
};

export default App;
