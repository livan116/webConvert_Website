import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import WorksSection from "../../Components/Case-Single/WorksSection";
import CaseSingleSection from "../../Components/Case-Single/CaseSingleSection";
import ProjectBrief from "../../Components/Case-Single/ProjectBrief";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const CaseSingle = () => {

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Keyword Research & Analysis"}
        breadcrumb={["Home", "Case Study", "Keyword Research & Analysis"]}
      />
      <CaseSingleSection />
      <ProjectBrief />
      <WorksSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default CaseSingle;
