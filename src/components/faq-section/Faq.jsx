import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={3} square {...props} />
))(({ theme }) => ({
  margin: "10px 0",
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 2px 12px -2px ${theme.palette.grey[500]}`,
  background: "linear-gradient(to right, #AC32E4, #7918F2, #4801FF)",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  color: theme.palette.getContrastText("#4801FF"),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          mt: 2,
          mb: 1,
          fontWeight: "bold",
          background: "linear-gradient(to right, #00dbde, #fc00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Here are some of the most common questions about our services with
        detailed answers to help you understand our processes better.
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What services does Epsilon provide?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Epsilon provides free educational support to students in Gobindaganj
            Upazila. Our services include tutoring in various subjects, exam
            preparation assistance, mentorship programs, and educational
            outreach initiatives within the community. We aim to empower
            students to achieve their academic goals and foster a love for
            learning.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Who can benefit from Epsilon's programs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Epsilon's programs are open to all students in Gobindaganj Upazila,
            regardless of age, gender, or socioeconomic background. We believe
            that education should be accessible to everyone, and we strive to
            support students at all levels, from primary school to higher
            education. Whether a student needs help with homework, exam
            preparation, or guidance for future career paths, Epsilon is here to
            assist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            How can I get involved with Epsilon as a volunteer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We welcome volunteers who are passionate about education and
            community service to join our team. If you're a university student
            in Gobindaganj Upazila and interested in volunteering with Epsilon,
            you can reach out to us through our website or social media
            channels. We offer various opportunities for volunteering, including
            tutoring, organizing outreach events, and administrative support.
            Join us in making a difference in the lives of students in our
            community!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
