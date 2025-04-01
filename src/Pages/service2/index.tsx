import TeamSection from "../../Components/About/TeamSection";
import WorksSection from "../../Components/Case-Single/WorksSection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import BlogSection from "../../Components/HomePage1/BlogSection";
import AboutSection from "../../Components/Service2/AboutSection";
import AnalysisSection from "../../Components/Service2/AnalysisSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import CtaSectionService2 from "../../Components/Service2/CtaSection";
import SliderSection from "../../Components/Service2/SliderSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";

const Service2Page = () => {
    document.body.className = "homepage1-body";

    return (
        <>
            <Header />
            <PageHero
                className="about-header-area"
                title={"Search Engine Optimization"}
                breadcrumb={["Home", "Services", "SEO"]}
            />
            <AboutSection />
            <div className="space60"></div>
            <SliderSection className={'slider-section-area slider-inner sp5'} />
            <WorksSection/>
            <CtaSectionService2/>
            <AnalysisSection/>
            <ChooseSection/>
            <TeamSection />
            <BlogSection />
            <CtaSection />
            <Footer />
        </>
    )
}

export default Service2Page
