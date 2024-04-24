import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        color: "white",
        pt: 6,
        pb: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <img
                src="logo-epsilon.svg"
                alt="logo"
                style={{ width: "40px", marginRight: { sm: "10px" } }}
              />
              Epsilon
            </Typography>
            <Typography variant="subtitle1">
              A voluntary organization.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: "center", sm: "right" } }}
          >
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "inline-flex" }}>
              <a href="https://www.facebook.com/epsilon2018">
                <IconButton aria-label="facebook" color="inherit">
                  <FacebookIcon />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/company/epsilon2018/">
                <IconButton aria-label="linkedin" color="inherit">
                  <LinkedInIcon />
                </IconButton>
              </a>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: 1,
            borderColor: "grey.700",
            pt: 3,
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "inherit" },
          }}
        >
          <Typography variant="subtitle1">
            © {new Date().getFullYear()} - Epsilon
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: { xs: 2, sm: 0 } }}>
            All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
