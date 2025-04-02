import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";

type navItemsTypes = {
  name: string;
  link: string;
};

const HeaderForSingle2: React.FC<{
  mainClass: string;
  navItems: navItemsTypes[];
  btnClass?: string;
  btnText?: string;
}> = ({ mainClass, navItems, btnClass, btnText }) => {
  const [active, setActive] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    switch (mainClass) {
      case "homepage1":
        setLogoUrl("../assets/img/logo/logo1.png");
        break;
      case "homepage2":
        setLogoUrl("../assets/img/logo/logo2.png");
        break;
      case "homepage3":
        setLogoUrl("../assets/img/logo/logo4.png");
        break;
      case "homepage4":
        setLogoUrl("../assets/img/logo/logo5.png");
        break;
      case "homepage5":
        setLogoUrl("../assets/img/logo/logo6.png");
        break;
      default:
        setLogoUrl("../assets/img/logo/logo1.png");
        break;
    }
  }, []);

  return (
    <header>
      <div
        className={`header-area ${mainClass} header header-sticky d-none d-lg-block ${
          isSticky ? "sticky" : ""
        }`}
        id="header"
      >
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar id="navbar-example2">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={logoUrl} alt="Site Logo" />
                    </Link>
                  </div>
                  <div className="main-menu d-flex align-items-center gap-3">
                    <ul className="m-0">
                      {navItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <a
                            href={`#${item.link}`}
                            onClick={() => setActive(item.link)}
                            className={`nav-link ${
                              item.link === active ? "active" : ""
                            }`}
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="btn-area d-flex gap-3 align-items-center">
                      <Link
                        to="/contact"
                        className={btnClass ? btnClass : "header-btn1"}
                      >
                        {btnText ? btnText : "Free Consultation"}
                      </Link>
                    </div>
                  </div>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeaderForSingle2;
