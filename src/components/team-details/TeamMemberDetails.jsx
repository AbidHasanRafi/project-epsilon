import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
  Divider,
  useMediaQuery,
} from "@mui/material";

const TeamMemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetch("/team.json?url")
      .then((response) => response.json())
      .then((data) => {
        const decodedId = decodeURIComponent(id);
        const selectedMember = data.find((member) => member.name === decodedId);
        setMember(selectedMember);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  const {
    name,
    position,
    department,
    college,
    bio,
    image,
    university,
    contactNumber,
    email,
    facebookId,
    credentialLink,
  } = member;

  return (
    <div className="container mx-auto my-8 px-4">
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Avatar
                src={image}
                alt={name}
                sx={{ width: "100%", height: "auto", borderRadius: 3, mb: 2 }}
              />
              <Typography variant="h4" gutterBottom>
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {position}
              </Typography>
              <Typography variant="body1" paragraph>
                {bio}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              {isSmallScreen && <Divider />}
              <div className="my-4">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  College:
                </Typography>
                <Typography variant="body2">{college}</Typography>
              </div>
              <Divider />
              <div className="my-4">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  University:
                </Typography>
                <Typography variant="body2">{university}</Typography>
              </div>
              <Divider />
              <div className="my-4">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  Department:
                </Typography>
                <Typography variant="body2">{department}</Typography>
              </div>
              <Divider />
              <div className="my-4">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  Contact:
                </Typography>
                <Typography variant="body2">{contactNumber}</Typography>
              </div>
              <Divider />
              <div className="my-4">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  Email:
                </Typography>
                <Typography variant="body2">{email}</Typography>
              </div>
              <Divider />
              <div className="mt-4">
                <Button
                  variant="contained"
                  color="primary"
                  href={`https://www.facebook.com/${facebookId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Button>
                <span className="mx-2"></span>
                <Button
                  variant="outlined"
                  color="primary"
                  href={credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credentials
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberDetails;
