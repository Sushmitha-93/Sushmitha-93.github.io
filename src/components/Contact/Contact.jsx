import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Grid, IconButton, Tooltip } from "@mui/material";
import Button from "@mui/material-next/Button";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <Box sx={{ backgroundColor: "#E3E3E3", paddingBottom: "40px" }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: "#ff4081",
            fontSize: "34px",
            textTransform: "none",
            paddingTop: "60px",
          }}
        >
          Looking Forward to Collaborate?
        </Typography>

        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontSize: "18px" }}
          >
            My inbox is always open. Whether you have a question or just want to
            say hello, I'll try my best to get back to you! Feel free to mail me
            about any relevant job updates.
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              color: "#ff4081",
              fontSize: "25px",
              textTransform: "none",
              paddingTop: "35px",
              marginBottom: "10px",
            }}
          >
            Get in Touch!
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item xs={1}>
              <EmailIcon
                sx={{
                  color: "#F14336",
                  fontSize: "55px",
                  marginLeft: "5px",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  color: "#283593",
                  fontSize: "23px",
                  marginTop: "8px",
                }}
              >
                sushmitha.dt@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Tooltip title="Copy Email">
                <IconButton
                  sx={{
                    color: "#ff4081",
                    fontSize: "25px",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <ContentCopyIcon
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "sushmitha.dhummithrilochana@sjsu.edu"
                      )
                    }
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item xs={1}>
              <IconButton
                href="https://www.linkedin.com/in/sushmitha-dt/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    color: "#0274B3",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={1.5}>
              <IconButton
                href="https://github.com/Sushmitha-93"
                target="_blank"
                rel="noreferrer"
                sx={{ marginLeft: "15px" }}
              >
                <GitHubIcon
                  sx={{
                    fontSize: "60px",
                    padding: "3px",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={2} sx={{ paddingTop: "17px" }}>
              <Button
                href="https://drive.google.com/file/d/18howMUF6mF15GEIRBy7ix03MGaB6M1TY/view"
                target="_blank"
                rel="noreferrer"
                startIcon={<ContactPageIcon />}
                color="secondary"
                size="large"
                variant="filled"
                sx={{ paddingLeft: "15px", fontSize: "20px" }}
              >
                Resume
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Contact;
