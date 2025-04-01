import AboutSection from "../../Components/HomePage1/AboutSection";
import BlogSection from "../../Components/HomePage1/BlogSection";
import CtaSection from "../../Components/Common/CtaSection";
import ServiceSection from "../../Components/HomePage1/ServiceSection";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import HeroSection from "../../Components/HomePage3/HeroSection";
import CaseStudySection from "../../Components/Common/CaseStudySection";
import WorkProcessSection from "../../Components/Common/WorkProcessSection";
import PricingSection from "../../Components/Common/PricingSection";
import TestimonialSection from "../../Components/Common/TestimonialSection";
import Footer3 from "../../Layouts/Footer3";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";

const SingleHomePage3 = () => {
  document.body.className = "homepage4-body";

  return (
    <>
      <HeaderForSingle
        mainClass="homepage5"
        navItems={singlePageNavLinks()}
        btnClass="header-btn12"
        btnText="Get Free Quote"
      />
      <MobileHeaderSidebar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <CaseStudySection />
      <WorkProcessSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <CtaSection />
      <Footer3 />
    </>
  );
};

export default SingleHomePage3;
