import AboutSection from "../../Components/HomePage1/AboutSection";
import BenefitsSection from "../../Components/HomePage1/BenefitsSection";
import BlogSection from "../../Components/HomePage1/BlogSection";
import ContactSection from "../../Components/HomePage1/ContactSection";
import CtaSection from "../../Components/Common/CtaSection";
import GoogleReviews from "../../Components/Common/GoogleReviews";
import Hero from "../../Components/HomePage1/Hero";
import ServiceSection from "../../Components/HomePage1/ServiceSection";
import ServiceSection2 from "../../Components/Common/ServiceSection2";
import Footer from "../../Layouts/Footer";
import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import HeaderForSingle from "../../Layouts/HeaderForSingle";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";

const SingleHomePage1 = () => {
  document.body.className = "homepage1-body";
  return (
    <>
      <HeaderForSingle mainClass="homepage1" navItems={singlePageNavLinks()} />
      <MobileHeaderSidebar />
      <Hero />
      <CompanySliderSection className="slider-section-area sp5" />
      <div
        className="all-section-bg"
        style={{
          backgroundImage: "url(../assets/img/bg/pages-bg1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AboutSection />
        <ServiceSection />
        <ServiceSection2 className="service2-section-area sp6" />
        <BenefitsSection />
        <GoogleReviews className="testimonial1-section-area sp6" />
        <BlogSection />
        <ContactSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
};

export default SingleHomePage1;
