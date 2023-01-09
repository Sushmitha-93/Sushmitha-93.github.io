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
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ paddingBottom: "60px" }}
        >
          A small introduction about myself
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
                I am currently pursuing Masters in Software Engineering at San
                Jose State University, speacilizing in Enterprise Software
                Development along with Machine Learning.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#ff4081",
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                What am I passionate about?
              </Typography>
              <Typography variant="body1" gutterBottom>
                I am a passionate Full-stack Software Engineer having experience
                in developing web applications with Java/ JavaScript/ React.js/
                Node.js and some other cool libraries and frameworks.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#ff4081",
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                Project I'm currently working on?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Autonomous Driving via Open Dataset.
                <i>
                  (I love exploring new things apart from application
                  development!)
                </i>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#ff4081",
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                Whats Next?
              </Typography>
              <Typography variant="body1" gutterBottom>
                I am actively looking for 2023 summer internship. I am
                interested in exploring the fields of Software Engineering and
                integration with Data Science, and Machine Learning.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#ff4081",
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                What am I proficent in?
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Item>
                <Typography
                  variant="h6"
                  gutterBottom="true"
                  className="cardHeading"
                >
                  Languages
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ paddingX: "15px", paddingY: "20px" }}
                >
                  <Grid item sm={6}>
                    <i class="devicon-python-plain colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-java-plain-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-javascript-plain colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-cplusplus-plain colored"></i>
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{ paddingX: "10px", paddingBottom: "20px" }}
                >
                  My favorite languages for systems programming, software
                  engineering, and data analysis.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Item>
                <Typography
                  variant="h6"
                  gutterBottom="true"
                  className="cardHeading"
                >
                  Front-End
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ paddingX: "30px", paddingY: "20px" }}
                >
                  <Grid item sm={6}>
                    <i class="devicon-react-original colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-materialui-plain colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-bootstrap-plain-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{ paddingX: "10px", paddingBottom: "20px" }}
                >
                  My preferred technologies for front-end web development and
                  component design.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Item>
                <Typography
                  variant="h6"
                  gutterBottom="true"
                  className="cardHeading"
                >
                  Back-End
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ paddingX: "30px", paddingY: "20px" }}
                >
                  <Grid item sm={6}>
                    <i class="devicon-nodejs-plain colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-express-original-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-mongodb-plain-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-mysql-plain-wordmark colored"></i>
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{ paddingX: "10px", paddingBottom: "20px" }}
                >
                  My preferred technologies for back-end web programming and
                  database architecture.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Item>
                <Typography
                  variant="h6"
                  gutterBottom="true"
                  className="cardHeading"
                >
                  Tools
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ paddingX: "30px", paddingY: "20px" }}
                >
                  <Grid item sm={6}>
                    <i class="devicon-git-plain-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-github-original-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <i class="devicon-docker-plain-wordmark colored"></i>
                  </Grid>
                  <Grid item sm={6}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
                      style={{ width: "75px" }}
                    />
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{ paddingX: "10px", paddingBottom: "20px" }}
                >
                  My favorite tools for version control, container orchestration
                  and CI/CD
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default About;
