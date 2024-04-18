import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function TestimonialSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/testimonials.json");
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ maxWidth: 800, flexGrow: 1, m: "auto", mt: 5, textAlign: "center" }}
    >
      {/* Custom style tag for gradient text */}
      <style>
        {`
          .gradient-text {
            background: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 900;  // Increased font-weight for extra boldness
          }
        `}
      </style>

      {/* Title with gradient */}
      <Typography
        variant="h5"
        component="h1"
        className="gradient-text"
        sx={{ fontWeight: 900, mb: 1 }}
      >
        {" "}
        Top Volunteer's Testimonial
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.info.main, mb: 2 }}
      >
        {" "}
        Here's what our top volunteers have to say about their experiences.
      </Typography>

      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            raised
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 2,
              background:
                "linear-gradient(89.7deg, rgb(0, 32, 95) 2.8%, rgb(132, 53, 142) 97.8%)",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              color: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 100, height: 100, mr: 2 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2">
                  {testimonial.institution}
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                <FormatQuoteIcon sx={{ transform: "scaleX(-1)", mr: 1 }} />
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontStyle: "italic" }}
                >
                  {testimonial.text}
                </Typography>
                <FormatQuoteIcon sx={{ ml: 1 }} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default TestimonialSlider;
