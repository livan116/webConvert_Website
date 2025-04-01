import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";
import CompanySliderSectionV2 from "../../Components/Common/CompanySliderSectionV2";
import AboutSection from "../../Components/HomePage1/AboutSection";
import BlogSection from "../../Components/HomePage9/BlogSection";
import CTASection from "../../Components/HomePage9/CTASection";
import HeroSection from "../../Components/HomePage9/HeroSection";
import PricingSection from "../../Components/HomePage9/PricingSection";
import ServiceSection from "../../Components/HomePage9/ServiceSection";
import SolutionSection from "../../Components/HomePage9/SolutionSection";
import TestimonialSection from "../../Components/HomePage9/TestimonialSection";
import Footer9 from "../../Layouts/Footer9";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";



const SingleHomePage9 = () => {
  document.body.className = "homepage9-body";

  return (
    <>
      <HeaderForSingle
        mainClass="homepage9"
        navItems={singlePageNavLinks()}
        btnClass="header-btn16"
        btnText="Free Consultation"
      />
      <MobileHeaderSidebar />
      <HeroSection />
      <CompanySliderSectionV2 className="slider7-section-area sp1" />
      <div className="bg3">
        <AboutSection />
      </div>
      <ServiceSection />
      <SolutionSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
      <Footer9 />
    </>
  );
};

export default SingleHomePage9;
