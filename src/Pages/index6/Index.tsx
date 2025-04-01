import AboutSection from "../../Components/Common/AboutSection";
import BlogSection from "../../Components/Common/BlogSection";
import CaseStudySection from "../../Components/Common/CaseStudySection";
import Cta2Section from "../../Components/Common/Cta2Section";
import PricingSection from "../../Components/Common/PricingSection";
import ServiceSection from "../../Components/Common/ServiceSection";
import TestimonialSection from "../../Components/Common/TestimonialSection";
import WorkProcessSection from "../../Components/Common/WorkProcessSection";
import Hero4Section from "../../Components/HomePage6/Hero4Section";
import Footer3 from "../../Layouts/Footer3";
import Header6 from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const HomePage6 = () => {
  document.body.className = "homepage4-body";

  return (
    <>
      <Header6 />
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

export default HomePage6;
