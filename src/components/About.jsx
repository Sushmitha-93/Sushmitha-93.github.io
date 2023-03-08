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
              <Typography variant="body1" gutterBottom display="block">
                Hi, I am a Master's student in Software Engineering at San Jose
                State University, with a focus on Enterprise Software
                Technologies and Data Science. Through my coursework and
                studies, I have acquired a strong understanding of advanced
                algorithms, software engineering principles, machine learning
                techniques, and enterprise application development.
              </Typography>

              <Typography variant="body1" gutterBottom>
                I'm a tech geek at heart, passionate about combining my
                knowledge of Machine Learning and AI with application
                development.
              </Typography>

              <Typography variant="body1" gutterBottom>
                Prior to this, I’ve worked as a full-stack application
                developer, as part of highly collaborative, dynamic Agile
                development environment using DevOps practices and the MERN
                stack (MongoDB, Express, React, and Node.js) to deliver complex,
                dynamic, business applications. This experience has not only
                allowed me to gain valuable practical skills in DevOps tools and
                processes, such as CI/CD pipelines, automated testing, or
                infrastructure as code but also strengthened my problem solving
                and interpersonal skills as well.
              </Typography>

              <Typography variant="body1" gutterBottom>
                I am actively seeking a summer internship in 2023, that can
                offer challenging and innovative environment where I can further
                develop my skills, learn from experienced mentors, and make a
                meaningful impact.
              </Typography>

              <Typography variant="body1" gutterBottom>
                Feel free to contact me regarding any opportunities.{" "}
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
