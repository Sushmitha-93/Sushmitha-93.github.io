import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material-next/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { SiGooglecolab } from "react-icons/si";

import "./ProjectCards.css";
import { CardHeader, Typography } from "@mui/material";

const ProjectCards = ({ projects }) => (
  <div className="container">
    <div className="ProjectCards-projects">
      {projects.map((projects, i) => {
        const logo = require(`../../data/img/${projects.picture}`); // eslint-disable-line global-require
        return (
          <LazyLoad height={150}>
            <div
              key={i} // eslint-disable-line react/no-array-index-key
              className="ProjectCards-project-container"
            >
              <div className="ProjectCards-project">
                <Card
                  style={projects.front ? projects.front.style : projects.style}
                  className="ProjectCards-project-front"
                >
                  <CardHeader
                    title={projects.name}
                    subheader={projects.subtitle}
                  />

                  <CardContent>
                    <img alt="" src={logo} />
                  </CardContent>
                  <CardContent>
                    {projects.techIcons &&
                      projects.techIcons.map((iconClass) => (
                        <i
                          class={iconClass}
                          style={{ fontSize: "50px", paddingLeft: "20px" }}
                        ></i>
                      ))}
                  </CardContent>
                </Card>

                <Card
                  style={projects.back ? projects.back.style : projects.style}
                  className="ProjectCards-project-back"
                >
                  <CardHeader
                    title={projects.name}
                    subheader={projects.subtitle}
                  />
                  <CardContent>
                    {projects.techIcons &&
                      projects.techIcons.map((iconClass) => (
                        <i
                          class={iconClass}
                          style={{
                            fontSize: "50px",
                            marginLeft: "10px",
                          }}
                        ></i>
                      ))}
                  </CardContent>
                  <CardContent>
                    {projects.description && (
                      <Typography
                        variant="body1"
                        paddingX="10px"
                        paddingY="10px"
                      >
                        {projects.description}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      color="secondary"
                      disabled={false}
                      size="small"
                      variant="filled"
                      startIcon={<GitHubIcon />}
                      href={projects.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ marginRight: "30px" }}
                    >
                      GitHub
                    </Button>
                    {projects.colabLink && (
                      <Button
                        startIcon={<SiGooglecolab />}
                        color="secondary"
                        disabled={false}
                        size="small"
                        variant="filled"
                        href={projects.deployedLink}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ marginBottom: "10px" }}
                      >
                        Colab Notebook
                      </Button>
                    )}
                    {projects.deployedLink && (
                      <Button
                        color="secondary"
                        disabled={false}
                        size="small"
                        variant="filled"
                        href={projects.deployedLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live
                      </Button>
                    )}
                    {projects.reportLink && (
                      <Button
                        startIcon={<DescriptionIcon />}
                        color="secondary"
                        disabled={false}
                        size="small"
                        variant="filled"
                        href={projects.deployedLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Report
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </div>
            </div>
          </LazyLoad>
        );
      })}
    </div>
  </div>
);

ProjectCards.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectCards;
