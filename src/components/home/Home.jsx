import CustomizedAccordions from "../faq-section/Faq";
import Header from "../header/Header";
import OurMission from "../mission/OurMission";
import TestimonialSlider from "../testimonial/TestimonialSlider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Epsilon - Home</title>
      </Helmet>
      <Header />
      <OurMission />
      <TestimonialSlider />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;
