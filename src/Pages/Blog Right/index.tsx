import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import { Container, Row } from "react-bootstrap";
import BlogSidebar from "../../Components/Blog/BlogSidebar";
import BlogContent from "../../Components/Blog/BlogContent";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const BlogRight = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Blog Details Left"}
        breadcrumb={["Home", "Our Blog"]}
      />
      <div className="blog-author-section-area sp1">
        <Container>
          <Row>
            <BlogContent />
            <BlogSidebar />
          </Row>
        </Container>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
};

export default BlogRight;
