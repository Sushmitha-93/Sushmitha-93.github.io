import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Divider, IconButton, Link } from "@mui/material";

import profilePic from "../images/profilePic2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function NameCard() {
  return (
    <Card sx={{ height: "92vh", width: 300 }}>
      <Avatar
        sx={{ width: 170, height: 190, margin: "auto", marginTop: "15px" }}
        src={profilePic}
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: "3px",
            fontWeight: 510,
            letterSpacing: "0.03em",
          }}
          gutterBottom
        >
          Sushmitha Thrilochana
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          gutterBottom
        >
          Masters in Software Engineering Student at San José State University
        </Typography>
      </CardContent>

      <Divider
        sx={{
          margin: "auto",
          width: "300px",
          borderBottomWidth: 2,
        }}
        textAlign="center"
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          href="https://github.com/Sushmitha-93"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/sushmitha-dt/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <EmailIcon />
        </IconButton>
      </CardActions>
      <Divider
        sx={{
          margin: "auto",
          width: "300px",
          borderBottomWidth: 2,
        }}
        textAlign="center"
      />
      <CardContent sx={{ paddingTop: 0 }}></CardContent>
    </Card>
  );
}
