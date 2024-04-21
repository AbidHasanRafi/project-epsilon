import { useState, useEffect, Suspense } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/team.json?url")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>

      <section className="mb-8">
        <Typography variant="h4" gutterBottom>
          Who We Are
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </section>

      <section className="mb-8">
        <Typography variant="h4" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedCard member={member} />
              </Suspense>
            </Grid>
          ))}
        </Grid>
      </section>

      <section className="mb-8">
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <ul>
          <li className="mb-2">Innovation</li>
          <li className="mb-2">Teamwork</li>
          <li className="mb-2">Quality</li>
          <li className="mb-2">Customer Satisfaction</li>
        </ul>
      </section>

      <section className="mb-8">
        <Typography variant="h4" gutterBottom>
          Mission and Vision
        </Typography>
        <Typography>
          Our mission is to provide innovative solutions that exceed customer
          expectations, while our vision is to become a global leader in our
          industry through continuous improvement and customer satisfaction.
        </Typography>
      </section>

      <section>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography>Email: info@example.com</Typography>
        <Typography>Phone: +1234567890</Typography>
      </section>
    </div>
  );
};

const LazyLoadedCard = ({ member }) => {
  return (
    <Card
      sx={{
        minWidth: 240,
        margin: "0.5rem",
        border: "2px solid #3f51b5",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent style={{ flex: "1 0 auto" }}>
        <Avatar
          src={member.image}
          alt={member.name}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 3,
            marginBottom: "1rem",
          }}
          variant="square"
        />
        <Typography variant="h6" gutterBottom>
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {member.position}
        </Typography>
        <Typography variant="body2" color="text.primary" className="mb-2">
          {member.bio}
        </Typography>
      </CardContent>
      <Box p={2}>
        <Button variant="outlined" size="small" sx={{ width: "100%" }}>
          <Link to={`/team/${encodeURIComponent(member.name)}`}>
            View Details
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

export default Team;
