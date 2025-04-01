import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import BlogContent from "../../Components/Blog/BlogContent";
import { Container, Row } from "react-bootstrap";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const BlogSingle = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Our Blog"}
        breadcrumb={["Home", "Our Blog"]}
      />
      <div className="blog-author-section-area sp1">
        <Container>
          <Row>
            <BlogContent />
          </Row>
        </Container>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
};

export default BlogSingle;
