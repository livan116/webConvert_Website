import PageHero from "../../Components/Common/PageHero";
import Header from "../../Layouts/Header";
import SliderSection from "../../Components/Service2/SliderSection";
import CtaSectionService2 from "../../Components/Service2/CtaSection";
import AnalysisSection from "../../Components/Service2/AnalysisSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import TeamSection from "../../Components/About/TeamSection";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import ServiceInnerHeader from "../../Components/Service4/ServiceInnerHeader";
import BlogSection from "../../Components/HomePage1/BlogSection";
import WorksSection from "../../Components/Service2/WorksSection";
const Service4Page = () => {
  document.body.className = "homepage1-body";

  return (
    <>
      <Header />
      <PageHero
        className="about-header-area"
        title={"Email Marketing"}
        breadcrumb={["Home", "Services", "Email Marketing"]}
      />
      <ServiceInnerHeader />
      <SliderSection className={"slider-section-area slider-inner sp5"} />
      <WorksSection />
      <CtaSectionService2 />
      <AnalysisSection />
      <ChooseSection />
      <TeamSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service4Page;
