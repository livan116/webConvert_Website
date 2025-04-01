import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import BlogSection from "../../Components/HomePage1/BlogSection";
import ContactForm from "../../Components/Faq/ContactForm";
import FAQAccodian from "../../Components/Faq/FAQAccodian";
import TestimonialSection from "../../Components/Faq/TestimonialSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const FAQPage = () => {
  document.body.className = "homepage1-body";

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Frequently Asked Question"}
        breadcrumb={["Home", "FAQ'S"]}
      />
      <FAQAccodian />
      <ContactForm />
      <TestimonialSection />
      <CtaSection />
      <BlogSection />
      <Footer />
    </>
  );
};

export default FAQPage;
