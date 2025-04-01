import GoogleReviewsV2 from "../../Components/Common/GoogleReviewsV2";
import About7Section from "../../Components/HomePage7/About7Section";
import BlogSection from "../../Components/HomePage7/BlogSection";
import BoostSection from "../../Components/HomePage7/BoostSection";
import CtaSection from "../../Components/HomePage7/CtaSection";
import Hero7Section from "../../Components/HomePage7/Hero7Section";
import Pricing7Section from "../../Components/HomePage7/Pricing7Section";
import Service7Section from "../../Components/HomePage7/Service7Section";
import Works7Section from "../../Components/HomePage7/Works7Section";
import Footer7 from "../../Layouts/Footer7";
import Header7 from "../../Layouts/Header7";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const HomePage7 = () => {
  document.body.className = "homepage7-body";

  return (
    <>
      <Header7 />
      <MobileHeaderSidebar />
      <Hero7Section />
      <About7Section />
      <Service7Section />
      <Works7Section />
      <Pricing7Section />
      <BoostSection />
      <GoogleReviewsV2 className="testimonial1-section-area sp1" />
      <BlogSection />
      <CtaSection />
      <Footer7 />
    </>
  );
};

export default HomePage7;
