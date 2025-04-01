import TeamSection from "../../Components/About/TeamSection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ChooseSection from "../../Components/Service2/ChooseSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import SliderSection from "../../Components/Service2/SliderSection";
import ServiceInner5Header from "../../Components/Service5/ServiceInnerHeader";
import BenefitsSection from "../../Components/Service3/BenefitsSection";
import ServiceSection from "../../Components/Service5/ServiceSection";
import BlogSection from "../../Components/HomePage1/BlogSection";

const Service5Page = () => {
    document.body.className = "homepage1-body";

    return (
        <>
            <Header />
            <PageHero
                className="about-header-area"
                title={"Social Media Marketing"}
                breadcrumb={["Home", "Services", "Social Media Marketing"]}
            />
            <ServiceInner5Header/>
            <SliderSection className={'slider-section-area slider-inner sp5'} />
            <BenefitsSection/>
            <ServiceSection/>
            <ChooseSection/>
            <TeamSection />
            <BlogSection />
            <CtaSection />
            <Footer />
        </>
    )
}

export default Service5Page