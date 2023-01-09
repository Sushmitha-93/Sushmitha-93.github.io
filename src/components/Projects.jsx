import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectCards from "./ProjectCards/ProjectCards";

import appProjects from "../data/appProjects.json";
import mlProjects from "../data/mlProjects.json";

const Projects = () => {
  return (
    <section id="projects">
      <Box sx={{ paddingLeft: 4, marginTop: "30px" }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: "#ff4081",
            fontSize: "34px",
            textTransform: "none",
          }}
        >
          My Recent Work
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ paddingBottom: "60px" }}
        >
          Some of the Things I've Build
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          textAlign="center"
          sx={{ color: "#ff4081", marginBottom: "20px" }}
        >
          Application Development Projects
        </Typography>
        <ProjectCards projects={appProjects} />

        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          sx={{ color: "#ff4081" }}
        >
          Machine Learning Projects
        </Typography>
        <ProjectCards projects={mlProjects} />
      </Box>
    </section>
  );
};

export default Projects;
