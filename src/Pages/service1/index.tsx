import SkillsSection from "../../Components/About/SkillsSection";
import TeamSection from "../../Components/About/TeamSection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ServiceSection1 from "../../Components/Service1/ServiceSection1";
import WorksSection1 from "../../Components/Service1/WorksSection1";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const Service1Page = () => {
  document.body.className = "homepage1-body";

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Our Best Services"}
        breadcrumb={["Home", "Our Best Services"]}
      />
      <ServiceSection1 />
      <WorksSection1 />
      <SkillsSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service1Page;
