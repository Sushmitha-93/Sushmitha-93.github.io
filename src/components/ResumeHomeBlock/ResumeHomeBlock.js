import React from "react";
import PropTypes from "prop-types";

import GridBackground from "../../components/GridBackground/GridBackground";
import ScreenBlock from "../../components/ScreenBlock/ScreenBlock";

import appTheme from "../../theme";
import "./ResumeHomeBlock.css";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ResumeHomeBlock = ({ style, shortFullName, headline }) => (
  <section id="home">
    <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
      <div className="ResumeHomeBlock-headline-container">
        <div className="ResumeHomeBlock-headline">
          <Typography
            variant="h2"
            sx={{ textAlign: "left", fontStyle: "italic" }}
          >
            Hi there! I am
          </Typography>
          <Typography variant="h1">
            Sushmitha Thrilochana
            <Box component="span" sx={{ color: "#FE481D" }}>
              .
            </Box>
          </Typography>
          <Typography variant="h2">
            A Full-stack web engineer | ML Enthusiast
          </Typography>
        </div>
      </div>

      <div className="ResumeHomeBlock-squares">
        <GridBackground>
          <div style={{ ...appTheme.java.style }}>{appTheme["java"].icon}</div>
          <div style={{ ...appTheme.python.style }}>{appTheme.python.icon}</div>
          <div style={{ ...appTheme.reactColor.style }}>
            {appTheme.reactColor.icon}
          </div>
          <div style={{ ...appTheme.graphql.style }}>
            {appTheme.graphql.icon}
          </div>
          <div style={{ ...appTheme.javascriptColor.style }}>
            {appTheme.javascriptColor.icon}
          </div>
          <div style={{ ...appTheme.dockerColor.style }}>
            {appTheme.dockerColor.icon}
          </div>
        </GridBackground>
      </div>
    </ScreenBlock>
  </section>
);

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResumeHomeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeHomeBlock;
