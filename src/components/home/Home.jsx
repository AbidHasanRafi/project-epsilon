import CustomizedAccordions from "../faq-section/Faq";
import Header from "../header/Header";
import OurMission from "../mission/OurMission";
import TestimonialSlider from "../testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <OurMission />
      <TestimonialSlider />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;
