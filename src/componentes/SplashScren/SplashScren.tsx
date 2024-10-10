import { Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import logo from "./react.png";

export function SplashScreen() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  `;

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        opacity={loaded ? 1 : 0}
        transition="opacity 1s ease-in-out"
      >
        <Image
          src={logo}
          alt="Logo da Enablers"
          onLoad={handleImageLoad}
          animation={`${pulse} 2s infinite alternate`}
          borderRadius="full"
          outline="solid #e1f5fe"
        />
      </Box>
    </Box>
  );
}
