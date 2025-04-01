import { Container, Row, Col } from "react-bootstrap";

const Header10BottomArea = () => {
  return (
    <div className="header10-bottom-area">
      <Container>
        <Row>
          <Col lg={10} className="m-auto">
            <div className="header-auhtor-area heading15 text-center">
              <h5>See How Well Your Page Is Optimized</h5>
              <h2 className="text-anime-style-3">Your SEO Score?</h2>
              <div className="space32 d-lg-block d-none"></div>
              <div className="space12 d-lg-none d-block"></div>
              <div className="header-form-area">
                <form>
                  <span>
                    <i className="fa-solid fa-globe" />
                  </span>
                  <input type="text" placeholder="Enter Your Website URL" />
                </form>
                <form>
                  <span>
                    <i className="fa-regular fa-envelope" />
                  </span>
                  <input type="text" placeholder="Enter Your Email" />
                </form>
                <div className="btn-area1">
                  <button type="button" className="header-btn17">
                    Send{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header10BottomArea;
