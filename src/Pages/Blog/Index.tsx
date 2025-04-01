import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import BlogTopArea from "../../Components/Blog/BlogTopArea";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import BlogSection from "../../Components/HomePage1/BlogSection";

const BlogPage = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Our Blog"}
        breadcrumb={["Home", "Our Blog"]}
      />
      <BlogTopArea />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default BlogPage;
