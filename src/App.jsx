import { Container } from "@mui/material";
import React from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import appTheme from "./theme.js";
import ResumeHomeBlock from "./components/ResumeHomeBlock/ResumeHomeBlock";
import Projects from "./components/Projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <ResumeHomeBlock
        shortFullName={"Sushmitha"}
        headline={"Hello"}
        style={appTheme.python.style}
      />
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <About />
      </Container>
      <TimeLine />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default App;
