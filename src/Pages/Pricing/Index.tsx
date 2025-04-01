import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ComparisonTable from "../../Components/Pricing/ComparisonTable";
import PricingSection from "../../Components/Pricing/PricingSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const PricingPage = () => {
  document.body.className = "homepage1-body";

  return (
    <>
      <Header />
      <MobileHeaderSidebar/>
      <PageHero
        className="about-header-area"
        title={"Pricing Plan"}
        breadcrumb={["Home", "Pricing Plan"]}
      />
      <PricingSection />
      <ComparisonTable />
      <CtaSection />
      <Footer />
    </>
  );
};

export default PricingPage;
