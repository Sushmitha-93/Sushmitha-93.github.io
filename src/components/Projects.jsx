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
          My Projects
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ paddingBottom: "40px" }}
        >
          Some of the things I've built. Hover over the projects for details.
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          sx={{
            color: "#ff4081",
            marginBottom: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.87)",
            padding: "14px",
          }}
        >
          Application Development Projects
        </Typography>
        <ProjectCards projects={appProjects} />

        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          sx={{
            color: "#ff4081",
            backgroundColor: "rgba(0, 0, 0, 0.87)",
            padding: "14px",
          }}
        >
          Machine Learning Projects
        </Typography>
        <ProjectCards projects={mlProjects} />
      </Box>
    </section>
  );
};

export default Projects;
