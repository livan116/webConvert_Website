import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";
import AboutSection from "../../Components/HomePage8/AboutSection";
import BlogSection from "../../Components/HomePage8/BlogSection";
import CaseStudySection from "../../Components/HomePage8/CaseStudySection";
import CtaAnalysisSection from "../../Components/HomePage8/CtaAnalysisSection";
import CtaSection from "../../Components/HomePage8/CtaSection";
import HeroSection from "../../Components/HomePage8/HeroSection";
import ServiceSection from "../../Components/HomePage8/ServiceSection";
import TestimonialSection from "../../Components/HomePage8/TestimonialSection";
import WorkProcessSection from "../../Components/HomePage8/WorkProcessSection";
import Footer8 from "../../Layouts/Footer8";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const SingleHomePage8 = () => {
  document.body.className = "homepage8-body";
  return (
    <>
      <HeaderForSingle
        mainClass="homepage8"
        navItems={singlePageNavLinks()}
        btnClass="header-btn15"
        btnText="Free Consultation"
      />
      <MobileHeaderSidebar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <CaseStudySection />
      <WorkProcessSection />
      <CtaAnalysisSection />
      <TestimonialSection />
      <BlogSection />
      <CtaSection />
      <Footer8 />
    </>
  );
};

export default SingleHomePage8;
