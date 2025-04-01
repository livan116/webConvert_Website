import BlogSection from "../../Components/HomePage1/BlogSection";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import Hero4Section from "../../Components/HomePage6/Hero4Section";
import CaseStudySection from "../../Components/Common/CaseStudySection";
import AboutSection from "../../Components/Common/AboutSection";
import ServiceSection from "../../Components/Common/ServiceSection";
import WorkProcessSection from "../../Components/Common/WorkProcessSection";
import PricingSection from "../../Components/Common/PricingSection";
import TestimonialSection from "../../Components/Common/TestimonialSection";
import Cta2Section from "../../Components/Common/Cta2Section";
import Footer3 from "../../Layouts/Footer3";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";

const SingleHomePage6 = () => {
  document.body.className = "homepage4-body";

  return (
    <>
      <HeaderForSingle
        mainClass="homepage4"
        navItems={singlePageNavLinks()}
        btnClass="header-btn12"
        btnText="Get In Touch"
      />
      <MobileHeaderSidebar />
      <Hero4Section />
      <AboutSection btnClass="header-btn6" />
      <ServiceSection btnClass="header-btn6" />
      <CaseStudySection btnClass="header-btn6" />
      <WorkProcessSection btnClass="header-btn6" />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <Cta2Section btnClass="header-btn7" />
      <Footer3 />
    </>
  );
};

export default SingleHomePage6;
