import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area">
              <img src="../assets/img/logo/logo1.png" alt="" />
              <p>
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure prominent
                position (SEO)
              </p>
              <ul>
                <li>
                  <Link to="#">
                    <img src="../assets/img/icons/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="../assets/img/icons/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="../assets/img/icons/linkedin.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="../assets/img/icons/youtube.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area1">
              <h3>About Link</h3>
              <ul>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/marketing">Marketing</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area2">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <Link to="mailto:Infoseoc@gmail.com">
                    <img src="../assets/img/icons/email.svg" alt="" />
                    <span>Infoseoc@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="../assets/img/icons/location.svg" alt="" />
                    <span>
                      8708 Technology Forest <br className="d-lg-block d-none" />
                      Pl Suite 125 -G, The <br className="d-lg-block d-none" />
                      Woodlands, TX 773
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="tel:123-456-7890">
                    <img src="../assets/img/icons/phone.svg" alt="" />
                    <span>123-456-7890</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-area3">
              <h3>Subscribe Our Newsletter</h3>
              <form action="#">
                <input type="text" placeholder="Enter Your email" />
                <button className="header-btn1">
                  Subscribe
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="space80 d-lg-block d-none"></div>
        <div className="space40 d-lg-none d-block"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <div className="pera">
                <p>ⓒ Copyright 2024 SEOC. All rights reserved</p>
              </div>
              <ul>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#" className="m-0">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
