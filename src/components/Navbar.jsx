import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import linkedInIcon from "../images/linkedIn2.png";
import githubIcon from "../images/github-white.png";
import gmailIcon from "../images/gmail.png";
import { Avatar, Icon, Tooltip } from "@mui/material";

import { Link, animateScroll as rsScroll } from "react-scroll";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import profileLinks from "../data/links.json";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1400,
      xl: 1536,
    },
  },
});

// Navigation actions
const pages = [
  { name: "About", id: "about" },
  { name: "Education", id: "timeline" },
  { name: "Skills", id: "skills" },
  { name: "Career Bio", id: "timeline" },
  { name: "Projects", id: "projects" },
  {
    name: "Resume",
    href: profileLinks.googleDriveResumeLink,
    target: "_blank",
    rel: "noreferrer",
    id: "resume",
  },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ backgroundColor: "#212529" }}>
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "32px",
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sushmita
              </Link>
              <Box component="span" sx={{ color: "#FE481D" }}>
                .
              </Box>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "22px",
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sushmitha
              <Box component="span" sx={{ color: "#FE481D" }}>
                .
              </Box>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  href={page.href}
                  target={page.target}
                  rel={page.rel}
                  sx={{
                    my: "12px",
                    color: "white",
                    display: "block",
                    letterSpacing: 4,
                    fontSize: "14px",
                    mx: { lg: "12px", md: "4px" },
                    "&:hover": { backgroundColor: "#FE481D" },
                  }}
                >
                  {page.id !== "resume" ? (
                    <Link
                      activeClass="active"
                      to={page.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {page.name}
                    </Link>
                  ) : (
                    page.name
                  )}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="LinkedIn Profile">
                <IconButton
                  sx={{ marginRight: 1.5 }}
                  href="https://www.linkedin.com/in/sushmitha-dt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Avatar src={linkedInIcon} sx={{ borderRadius: "2px" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Github  Profile">
                <IconButton
                  href="https://github.com/Sushmitha-93"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ marginRight: 1.5 }}
                >
                  <Avatar src={githubIcon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy email address">
                <IconButton
                  sx={{ marginRight: 1.5 }}
                  onClick={() =>
                    navigator.clipboard.writeText("dtsushmitha@gmail.com")
                  }
                >
                  <Avatar src={gmailIcon} sx={{ borderRadius: "2px" }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
