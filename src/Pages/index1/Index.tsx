import AboutSection from "../../Components/HomePage1/AboutSection";
import BenefitsSection from "../../Components/HomePage1/BenefitsSection";
import BlogSection from "../../Components/HomePage1/BlogSection";
import ContactSection from "../../Components/HomePage1/ContactSection";
import CtaSection from "../../Components/Common/CtaSection";
import GoogleReviews from "../../Components/Common/GoogleReviews";
import Hero from "../../Components/HomePage1/Hero";
// import ServiceSection from "../../Components/HomePage1/ServiceSection";
import ServiceSection2 from "../../Components/Common/ServiceSection2";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import SkillsSection from "../../Components/About/SkillsSection";
import TestimonialSection from "../../Components/Faq/TestimonialSection";
import BookingSection from "../../Components/Common/BookingSection";
import FAQAccodian from "../../Components/Faq/FAQAccodian";
import PricingSection from "../../Components/Pricing/PricingSection";
// import TeamMembersSection from "../../Components/Team/TeamMembersSection";
import TeamSection from "../../Components/About/TeamSection";

const HomePage1 = () => {
  document.body.className = "homepage1-body";

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <Hero />
      <CompanySliderSection className="slider-section-area sp5" />
      <BenefitsSection />
      <BookingSection/>
      <CtaSection />
      <div
        className="all-section-bg"
        style={{
          backgroundImage: "url(../assets/img/bg/pages-bg1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AboutSection />
        <SkillsSection />
        <PricingSection />
        <TestimonialSection />
        {/* <ServiceSection /> */}
        <TeamSection />
        <ContactSection />
        <FAQAccodian />
        <ServiceSection2 className="service2-section-area sp6" />
        <GoogleReviews className="testimonial1-section-area sp6" />
        <BlogSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage1;
