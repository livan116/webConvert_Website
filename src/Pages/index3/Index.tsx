import Header3 from "../../Layouts/Header3";
import HeroSection from "../../Components/HomePage3/HeroSection";
import AboutSection from "../../Components/Common/AboutSection";
import ServiceSection from "../../Components/Common/ServiceSection";
import CaseStudySection from "../../Components/Common/CaseStudySection";
import WorkProcessSection from "../../Components/Common/WorkProcessSection";
import PricingSection from "../../Components/Common/PricingSection";
import TestimonialSection from "../../Components/Common/TestimonialSection";
import BlogSection from "../../Components/Common/BlogSection";
import Cta2Section from "../../Components/Common/Cta2Section";
import Footer3 from "../../Layouts/Footer3";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const HomePage3 = () => {
  document.body.className = "homepage4-body";

  return (
    <>
      <Header3 />
      <MobileHeaderSidebar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <CaseStudySection />
      <WorkProcessSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <Cta2Section />
      <Footer3 />
    </>
  );
};

export default HomePage3;
