import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import About2Section from "../../Components/HomePage2/About2Section";
import Hero2Section from "../../Components/HomePage2/Hero2Section";
import ServiceSection from "../../Components/HomePage2/ServicesSection";
import Work1Section from "../../Components/HomePage2/Work1Section";
import WorkProcessSection from "../../Components/HomePage2/WorkProcessSection";
import Header2 from "../../Layouts/Header2";
import Team2Section from "../../Components/Common/Team2Section";
import Cta2Section from "../../Components/HomePage2/Cta2Section";
import Footer2 from "../../Layouts/Footer2";
import Blog2Section from "../../Components/HomePage2/Blog2Section";
import Testimonial2Section from "../../Components/HomePage2/Testimonial2Section";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const HomePage2 = () => {
  document.body.className = "homepage2-body";
  document.body.style.backgroundImage =
    "url(../assets/img/bg/homepage2-bg.png)";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

  return (
    <>
      <Header2 />
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

export default HomePage2;
