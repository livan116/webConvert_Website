import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";
import AboutSection from "../../Components/HomePage4/AboutSection";
import BlogSection from "../../Components/HomePage4/BlogSection";
import Case5Section from "../../Components/HomePage4/Case5Section";
import ContactSection from "../../Components/HomePage4/ContactSection";
import CTASection from "../../Components/HomePage4/CTASection";
import HeroSection from "../../Components/HomePage4/HeroSection";
import ServiceSection from "../../Components/HomePage4/ServiceSection";
import TeamSection from "../../Components/HomePage4/TeamSection";
import TestimonialSection from "../../Components/HomePage4/TestimonialSection";
import Footer4 from "../../Layouts/Footer4";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const SingleHomePage4 = () => {
  document.body.className = "homepage5-body";

  return (
    <>
      <HeaderForSingle
        mainClass="homepage5"
        navItems={singlePageNavLinks()}
        btnClass="header-btn9"
        btnText="Get Free Quote"
      />
      <MobileHeaderSidebar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Case5Section />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <CTASection />
      <Footer4 />
    </>
  );
};

export default SingleHomePage4;
