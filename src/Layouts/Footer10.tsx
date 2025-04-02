import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Define the Footer component
const Footer10: React.FC = () => {
  const socialLinks = [
    { href: "#", src: "../assets/img/icons/facebook.svg", alt: "Facebook" },
    { href: "#", src: "../assets/img/icons/instagram.svg", alt: "Instagram" },
    { href: "#", src: "../assets/img/icons/linkedin.svg", alt: "LinkedIn" },
    { href: "#", src: "../assets/img/icons/youtube.svg", alt: "Youtube" },
  ];

  const aboutLinks = [
    { to: "/blog", text: "Our Blog" },
    { to: "/about", text: "About Us" },
    { to: "/service1", text: "Services" },
    { to: "/case", text: "Marketing" },
    { to: "/testimonials", text: "Testimonials" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <footer className="footer10-section-area">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="footer-logo-area">
              <img src="../assets/img/logo/logo2.png" alt="Logo" />
              <p>
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure a prominent
                position (SEO)
              </p>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>
                      <img src={link.src} alt={link.alt} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <div className="footer-logo-area1">
              <h3>About Link</h3>
              <ul>
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-logo-area2">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="mailto:Infoseoc@gmail.com">
                    <img src="../assets/img/icons/email.svg" alt="Email" />
                    <span>Infoseoc@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../assets/img/icons/location.svg"
                      alt="Location"
                    />
                    <span>
                      8708 Technology Forest
                      <br className="d-lg-block d-none" />
                      Pl Suite 125 -G, The
                      <br className="d-lg-block d-none" />
                      Woodlands, TX 773
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:123-456-7890">
                    <img src="../assets/img/icons/phone.svg" alt="Phone" />
                    <span>123-456-7890</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="footer-logo-area3">
              <h3>Subscribe Our Newsletter</h3>
              <form action="#">
                <input type="text" placeholder="Enter Your email" />
                <button className="header-btn17">
                  Subscribe{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
        <div className="space80 d-lg-block d-none"></div>
        <div className="space40 d-lg-none d-block"></div>
        <Row>
          <Col lg={12}>
            <div className="copyright-area">
              <div className="pera">
                <p>ⓒCopyright 2024 SEOC . All rights reserved</p>
              </div>
              <ul>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#" className="m-0">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer10;
