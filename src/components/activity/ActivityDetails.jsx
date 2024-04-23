import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ActivityDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch("/activities.json")
      .then((response) => response.json())
      .then((data) => {
        const foundActivity = data.find((item) => item.id === parseInt(id));
        setActivity(foundActivity);
      })
      .catch((error) =>
        console.error("Error fetching activity details", error)
      );
  }, [id]);

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#ffffff", // white background
        color: "#333", // dark text color
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        border: "1px solid #ddd", // light gray border
        marginTop: "40px",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <IconButton
          sx={{ color: "#333" }} // dark icon color
          onClick={() => window.history.back()}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h4"
          sx={{
            marginLeft: "10px",
            fontWeight: "bold",
            color: "#333", // dark text color
            fontSize: { xs: "24px", md: "32px" }, // responsive font size
          }}
        >
          {activity.title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "calc(100% - 40px)",
          marginBottom: "20px",
          border: "1px solid #ddd", // light gray border
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={activity.image}
          alt={activity.title}
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "left",
          width: "100%",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {activity.description}
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            <strong>Date:</strong> {activity.date}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            <strong>Location:</strong> {activity.location}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            <strong>Duration:</strong> {activity.duration}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            <strong>Participants:</strong> {activity.participants}
          </Typography>
        </Box>
        <Typography variant="body2">{activity.details}</Typography>
      </Box>
    </Box>
  );
};

export default ActivityDetails;
