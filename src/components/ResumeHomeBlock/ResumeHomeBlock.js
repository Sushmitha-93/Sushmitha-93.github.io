import React from "react";
import PropTypes from "prop-types";

import GridBackground from "../../components/GridBackground/GridBackground";
import ScreenBlock from "../../components/ScreenBlock/ScreenBlock";

import appTheme from "../../theme";
import "./ResumeHomeBlock.css";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { HiSpeakerWave } from "react-icons/hi2";
import { IconButton, Tooltip } from "@mui/material";
import nameAudio from "../../audio/sushmitha.mp3";

export const ResumeHomeBlock = ({ style, shortFullName, headline }) => {
  function playAudio() {
    new Audio(nameAudio).play();
  }

  return (
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
              Sushmita Thrilochana
              <Box component="span" sx={{ color: "#FE481D" }}>
                .
              </Box>
              <Tooltip title="Click for pronunciation">
                <IconButton className="speakerButton">
                  <HiSpeakerWave size={50} onClick={playAudio} />
                </IconButton>
              </Tooltip>
            </Typography>
            <Typography variant="h2">
              A Full-stack Developer{" "}
              <span style={{ color: "#FE481D", fontWeight: "bold" }}>|</span> ML
              Enthusiast
            </Typography>
          </div>
        </div>

        <div className="ResumeHomeBlock-squares">
          <GridBackground>
            <div style={{ ...appTheme.java.style }}>
              {appTheme["java"].icon}
            </div>
            <div style={{ ...appTheme.python.style }}>
              {appTheme.python.icon}
            </div>
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
};

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResumeHomeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeHomeBlock;
