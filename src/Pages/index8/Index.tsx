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
import Header8 from "../../Layouts/Header8";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const HomePage8 = () => {
  document.body.className = "homepage8-body";
  return (
    <>
      <Header8 />
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

export default HomePage8;
