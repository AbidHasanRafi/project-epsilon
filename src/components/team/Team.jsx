import { useState, useEffect, Suspense } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ValueIcon from "@mui/icons-material/EmojiObjects";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/team.json?url")
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl text-indigo-700 font-bold mb-4">
        Meet Team Epsilon
      </h1>
      <Box borderBottom="1px solid #e0e0e0" my={1} />
      <section className="mb-8">
        <Marquee className="font-bold px-2">
          We are university students of Gobindaganj Upazila, through our
          voluntary organization we aim to provides free educational support and
          foster community relationships through outreach-
          <span className="mr-2">programs.</span>
        </Marquee>
      </section>

      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <section className="mb-8">
          <Grid container spacing={2}>
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLoadedCard member={member} />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        </section>
      )}

      <section className="mb-12">
        <Typography
          variant="h4"
          className="text-3xl font-bold text-indigo-700 mb-6"
        >
          Our Values
        </Typography>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard title="Volunteering" color="green">
            We believe in giving back to our community through voluntary
            efforts.
          </ValueCard>
          <ValueCard title="Teamwork" color="yellow">
            Collaboration and teamwork are the keys to our success.
          </ValueCard>
          <ValueCard title="Quality Education" color="blue">
            Providing quality education is our top priority.
          </ValueCard>
          <ValueCard title="Consumer Satisfaction" color="pink">
            We strive to ensure our consumers are fully satisfied with our
            services.
          </ValueCard>
        </div>
      </section>

      <section
        id="contact-section"
        className="mb-12 rounded-lg border border-gray-300 p-8"
      >
        <div>
          <Typography
            variant="h4"
            className={`text-3xl font-extrabold text-indigo-700 mb-4`}
          >
            Contact Us
          </Typography>
          <br />
          <div className="flex flex-col items-center space-y-4 border-b-2 border-gray-400 pb-4 mb-4">
            <div className="text-lg font-semibold">
              <span>Email:</span> epsilon.gobindaganj@gmail.com
            </div>
            <div className="text-lg font-semibold">
              <span>Phone:</span> +1234567890
            </div>
          </div>
          <Button variant="contained" color="primary">
            Facebook Page
          </Button>
        </div>
      </section>
    </div>
  );
};

const LazyLoadedCard = ({ member }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minWidth: 240,
        margin: "0.5rem",
        borderRadius: "10px",
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
        height: "100%",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          padding: "16px",
          alignItems: "center",
        }}
      >
        <Avatar
          src={member.image}
          alt={member.name}
          sx={{
            width: "80%",
            height: "auto",
            borderRadius: "50%",
            border: "4px solid #3f51b5",
          }}
          variant="square"
        />
        <Box>
          <Typography variant="h6" gutterBottom>
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            <span style={{ color: "#3f51b5" }}>{member.position}</span>
          </Typography>
          <Typography variant="body2" color="text.primary" className="mb-2">
            {member.bio}
          </Typography>
          <Box borderBottom="1px solid #e0e0e0" my={1} />
        </Box>
      </CardContent>
      <Box p={1}>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          component={Link}
          to={`/team/${encodeURIComponent(member.name)}`}
          sx={{
            color: "#fff",
            backgroundColor: "#3f51b5",
            marginBottom: "10px",
            "&:hover": {
              borderColor: "#3f51b5",
              color: "#3f51b5",
            },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

const ValueCard = ({ title, color, children }) => {
  return (
    <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
      <ValueIcon className={`w-12 h-12 mb-4 text-${color}-500 mx-auto`} />
      <Typography
        variant="h6"
        className={`text-lg font-semibold text-${color}-700 text-center mb-4`}
      >
        {title}
      </Typography>
      <Typography variant="body2" className="text-base text-gray-700">
        {children}
      </Typography>
    </div>
  );
};

export default Team;
