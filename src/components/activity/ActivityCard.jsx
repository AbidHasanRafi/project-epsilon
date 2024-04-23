import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ActivityCard = ({ activity }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: "20px",
        margin: "10px",
        borderRadius: "15px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={activity.image}
        alt={activity.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          {activity.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
          paddingBottom: "20px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Button
          component={Link}
          to={`/activity/${activity.id}`}
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#2196f3",
            color: "#fff",
            flex: "1",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
