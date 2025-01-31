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
import { NavLink, useLocation } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Activity", path: "/activity" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ maxWidth: 1400 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink to="/">
              {" "}
              <img className="w-14 m-2" src="logo-epsilon.svg" alt="logo" />
            </NavLink>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    letterSpacing: "0.05rem",
                    textTransform: "none",
                    backgroundColor:
                      location.pathname === page.path
                        ? "rgba(255, 255, 255, 0.1)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <a href="https://www.facebook.com/epsilon2018">
              <Button variant="outlined" color="inherit" sx={{ my: 2, mx: 2 }}>
                Contact Us
              </Button>
            </a>
          </Box>
          <IconButton
            size="large"
            edge="start"
            onClick={handleOpenNavMenu}
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", md: "none" },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
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
              "& .MuiMenuItem-root": {
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{ letterSpacing: "0.05rem" }}
                >
                  <NavLink
                    to={page.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.name}
                  </NavLink>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
