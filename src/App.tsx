import { Box, Card, Flex, Tabs } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Ui/NavBar";
import { QueimadasData } from "./mock/QueimadasData";
import SideBar from "./componentes/Ui/SideBar";
import Footer from "./componentes/Ui/Footer";
import MapaQueimadas from "./componentes/Map/MapaQueimadas";
import Causas from "./Pages/Causes";
import Conscientizacao from "./Pages/Conscientizacao";
import GraficoBarras from "./componentes/Graficos/GraficoGeral";
import InformativoCard from "./componentes/informacoes/InformativoCard";
import { SplashScreen } from "./componentes/SplashScren/SplashScren";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const startTimer = () => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  };

  useEffect(() => {
    if (showSplash) {
      startTimer();
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Card id="root">
        <Tabs variant="soft-rounded" colorScheme="teal">
          <Flex direction="column" height="100vh">
            <Navbar />
            <SideBar />
            <Box flex="1" overflowY="auto" mt="55px">
              <Routes>
                <Route
                  path="/"
                  element={<MapaQueimadas queimadas={QueimadasData} />}
                />
                <Route path="/InformativoCard" element={<InformativoCard />} />
                <Route path="/causas" element={<Causas />} />
                <Route path="/conscientizacao" element={<Conscientizacao />} />
                <Route
                  path="/graficos"
                  element={
                    <GraficoBarras
                      queimadas={QueimadasData}
                      isLoading={isLoading}
                    />
                  }
                />
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
