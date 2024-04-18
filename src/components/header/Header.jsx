import { useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";
import Typewriter from "typewriter-effect/dist/core";

function Header() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        strings: ["Think", "Learn", "Improve"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      });

      typewriter
        .typeString("Think")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Learn")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Improve")
        .pauseFor(1000)
        .deleteAll()
        .start();
    }
  }, []);

  return (
    <Box
      sx={{
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textShadow: "1px 1px 2px black",
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
          mb: 3,
        }}
      >
        Welcome to Epsilon!
      </Typography>
      <span
        ref={typewriterRef}
        style={{
          fontSize: "1.75rem",
          display: "block",
          textAlign: "center",
          width: "100%",
          color: "white",
          textShadow: "1px 1px 2px black",
        }}
      />
    </Box>
  );
}

export default Header;
