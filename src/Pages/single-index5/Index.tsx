import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";
import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import Team2Section from "../../Components/Common/Team2Section";
import AboutSection from "../../Components/HomePage5/AboutSection";
import Blog3Section from "../../Components/HomePage5/Blog3Section";
import Cta3Section from "../../Components/HomePage5/Cta3Section";
import HeroSection from "../../Components/HomePage5/HeroSection";
import ServiceSection from "../../Components/HomePage5/ServiceSection";
import Work3Section from "../../Components/HomePage5/Work3Section";
import Work4Section from "../../Components/HomePage5/Work4Section";
import Footer5 from "../../Layouts/Footer5";
import HeaderForSingle2 from "../../Layouts/HeaderForSingle2";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";


const SingleHomePage5 = () => {
  document.body.className = "homepage3-body";

  return (
    <>
      <HeaderForSingle2
        mainClass="homepage3"
        navItems={singlePageNavLinks()}
        btnClass="header-btn5"
        btnText="Free Consultation"
      />
      <MobileHeaderSidebar />
      <HeroSection />
      <CompanySliderSection className="slider3-section-area sp5" />
      <AboutSection />
      <ServiceSection />
      <Work3Section />
      <Work4Section />
      <Team2Section className="team3-section-area" heading="heading6" />
      {/* Testimonials */}
      <Blog3Section />
      <Cta3Section />
      <Footer5 />
    </>
  );
};

export default SingleHomePage5;
