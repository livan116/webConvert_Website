import CtaSection from "../../Components/Common/CtaSection"
import GoogleReviews from "../../Components/Common/GoogleReviews"
import PageHero from "../../Components/Common/PageHero"
import TestimonialSection from "../../Components/Faq/TestimonialSection"
import BlogSection from "../../Components/HomePage1/BlogSection"
// import TestimonialSlider from "../../Components/Testimonial/Testimonial"
import Footer from "../../Layouts/Footer"
import Header from "../../Layouts/Header"
import MobileHeaderSidebar from "../../Layouts/MobileHeader"

const TestimonialPage = () => {
    document.body.className = "homepage1-body";
    return (
        <>
            <Header />
            <MobileHeaderSidebar/>
            <PageHero
                className="about-header-area"
                title={"Testimonials"}
                breadcrumb={["Home", "Testimonials"]}
            />
             <TestimonialSection />
            <CtaSection />
             <GoogleReviews className="testimonial1-section-area sp6" />
             <BlogSection />
            <Footer />
        </>
    )
}

export default TestimonialPage
