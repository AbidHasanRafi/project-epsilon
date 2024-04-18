import { Typography, Grid, Box, Paper, Card, CardContent } from "@mui/material";
import { blue } from "@mui/material/colors";

function OurMission() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Paper elevation={6} sx={{ padding: 3, marginBottom: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="mission.svg"
              alt="Our Mission"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="textSecondary">
              At Epsilon, our mission is to empower individuals through
              education. We believe in providing high-quality, accessible, and
              engaging learning resources for free. Our goal is to make
              education accessible to everyone, everywhere, without the
              constraints of cost, location, or access barriers.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Card sx={{ backgroundColor: blue[500], color: "#ffffff" }}>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            Why Choose Epsilon?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Epsilon stands out by offering:
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: "medium" }}>
            ✔ Free Access to All Content
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: "medium" }}>
            ✔ Courses Designed by Experts
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: "medium" }}>
            ✔ Interactive and Engaging Learning Materials
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: "medium" }}>
            ✔ Constantly Updated Curricula
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default OurMission;
