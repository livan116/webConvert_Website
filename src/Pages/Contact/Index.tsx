import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ContactMain from "../../Components/Contact/ContactMain";
import LocationSection from "../../Components/Contact/LocationSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const Contact = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Contact Us"}
        breadcrumb={["Home", "Contact Us"]}
      />
      <ContactMain />
      <LocationSection />
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
};

export default Contact;
