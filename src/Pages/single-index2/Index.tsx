import Hero2Section from "../../Components/HomePage2/Hero2Section";
import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import About2Section from "../../Components/HomePage2/About2Section";
import ServiceSection from "../../Components/HomePage2/ServicesSection";
import Work1Section from "../../Components/HomePage2/Work1Section";
import WorkProcessSection from "../../Components/HomePage2/WorkProcessSection";
import Team2Section from "../../Components/Common/Team2Section";
import Testimonial2Section from "../../Components/HomePage2/Testimonial2Section";
import Blog2Section from "../../Components/HomePage2/Blog2Section";
import Cta2Section from "../../Components/HomePage2/Cta2Section";
import Footer2 from "../../Layouts/Footer2";
import HeaderForSingle2 from "../../Layouts/HeaderForSingle2";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import singlePageNavLinks from "../../assets/helpers/SinglePageNavLinks";

const SingleHomePage2 = () => {
  document.body.className = "homepage2-body";
  document.body.style.backgroundImage =
    "url(../assets/img/bg/homepage2-bg.png)";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

  return (
    <>
      <HeaderForSingle2
        mainClass="homepage2"
        btnClass="header-btn3"
        navItems={singlePageNavLinks()}
      />
      <MobileHeaderSidebar />
      <Hero2Section />
      <CompanySliderSection className="slider2-section-area sp5" />
      <About2Section />
      <ServiceSection />
      <Work1Section />
      <WorkProcessSection />
      <Team2Section />
      <Testimonial2Section />
      <Blog2Section />
      <Cta2Section />
      <Footer2 />
    </>
  );
};

export default SingleHomePage2;
