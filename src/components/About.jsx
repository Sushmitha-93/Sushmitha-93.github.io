import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";

import profilePic from "../images/profileCropped.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import "../styles/about.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const aboutStyle = {
  fontSize: "20px",
};

const About = () => {
  return (
    <section id="about">
      <Box sx={{ marginBottom: 5 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: "#ff4081",
            fontSize: "34px",
            textTransform: "none",
            paddingBottom: "60px",
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ marginBottom: "25px", paddingRight: "60px" }}
          >
            <Box>
              <br />
              <Typography
                variant="body1"
                gutterBottom
                display="block"
                sx={aboutStyle}
              >
                👋 Hi there! I am a recent Software Engineering Graduate from
                San Jose State University with specialization in Enterprise
                Software Technologies.
              </Typography>
              <br />

              <Typography variant="body1" sx={aboutStyle} gutterBottom>
                As a versatile Software Engineer with 'Agile Mindset', I bring
                over 5 years of experience in Full Stack application development
                and Microservice architecture. My cross-specialization in Data
                Science has deepened my understanding of data-driven solutions.
                I am eager to expand my skill set in ML/AI to build AI-powered
                solutions that have global impact.
              </Typography>
              <br />

              <Typography variant="body1" sx={aboutStyle} gutterBottom>
                I enjoy the challenge of developing sophisticated software and
                learning new coding skills. I thrive working in team oriented
                environments and believe that best solutions come from working
                with other programmers and developers to meet common goal. I
                enjoy writing reusable, less buggy codes. 👩‍💻💻
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Avatar
                sx={{
                  width: 330,
                  height: 330,
                }}
                src={profilePic}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
