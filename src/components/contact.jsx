import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Grid, IconButton, Tooltip } from "@mui/material";

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
            sx={{
              color: "#ff4081",
              fontSize: "25px",
              textTransform: "none",
              paddingTop: "35px",
            }}
          >
            Get in Touch!
          </Typography>
          <Grid container spacing={1} maxWidth="sm">
            <Grid item xs={2}>
              <EmailIcon
                sx={{
                  color: "#ff4081",
                  fontSize: "36px",
                  marginLeft: "55px",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h6"
                sx={{
                  color: "#283593",
                  fontSize: "23px",
                  marginLeft: "5px",
                }}
              >
                sushmitha.dhummithrilochana@sjsu.edu
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Copy Email">
                <IconButton
                  sx={{
                    color: "#ff4081",
                    fontSize: "25px",
                    marginLeft: "70px",
                    marginTop: "3px",
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
      </Box>
    </section>
  );
};

export default Contact;
