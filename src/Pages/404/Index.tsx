import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import ErrorSection from "../../Components/404/ErrorSection";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const NotFoundPage = () => {

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"404 Error"}
        breadcrumb={["Home", "404 Error"]}
      />
      <ErrorSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default NotFoundPage;
