import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import singlePageNavLinks from "../assets/helpers/SinglePageNavLinks";

type NavItem = {
  title: string;
  link?: string;
  target?: string;
  subMenu?: NavItem[];
};

type NavItemSingle = {
  name: string;
  link?: string;
};

type ContactInfoItem = {
  icon: string;
  text: string;
  link?: string;
};

type SocialLink = {
  icon: string;
  link: string;
};

const homeItems = [
  {
    title: "Home",
    
  },
];

const navItems = [
  { title: "About", link: "/about" },
  {
    title: "Services",
    link: "/service1",
    
  },
  {
    title: "Blogs",
    link: "/blog",
   
  },
  {
    title: "Pages",
    subMenu: [
      { title: "Case Study", link: "/case" },
      { title: "Case Study Single", link: "/case-single" },
      { title: "Our Team", link: "/team" },
      { title: "Pricing Plan", link: "/pricing" },
      { title: "Testimonials", link: "/testimonials" },
      { title: "FAQ", link: "/faq" },
      { title: "Booking", link: "/booking" },
      { title: "Help Center", link: "/help" },
      { title: "Privacy Policy", link: "/privacy" },  
      { title: "Refund Policy", link: "/refund" },  
      { title: "Terms And Conditions", link: "/terms" },
      { title: "404", link: "/404" },
    ],
  },
  { title: "Contact Us", link: "/contact" },
];

const contactInfo = [
  { icon: "fa-phone-volume", text: "+3(924)4596512", link: "tel:+39244596512" },
  {
    icon: "fa-envelope",
    text: "info@example.com",
    link: "mailto:info@example.com",
  },
];

const socialLinks = [
  { icon: "fa-facebook-f", link: "#" },
  { icon: "fa-instagram", link: "#" },
  { icon: "fa-linkedin-in", link: "#" },
  { icon: "fa-youtube", link: "#" },
];

// Navigation List Component
const NavigationList: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setOpenSubMenuIndex(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ul className="mobile-nav-list nav-list1 mt-1 p-0">
      {items.map((item, index) => (
        <li key={index} className={item.subMenu ? "has-sub" : ""}>
          <Link to={item.link || "/"}>
            {item.title}
          </Link>
          {item.subMenu && (
            <>
              <span
                className={`submenu-button ${
                  openSubMenuIndex === index ? "submenu-opened" : ""
                }`}
                onClick={() => toggleSubMenu(index)}
              >
                <em></em>
              </span>
              <ul
                className={`sub-menu ${
                  openSubMenuIndex === index ? "open-sub" : ""
                }`}
                style={{
                  display: openSubMenuIndex === index ? "block" : "none",
                }}
              >
                <NavigationList items={item.subMenu} />
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

// NavigationList Single
const NavigationListSingle: React.FC<{ items: NavItemSingle[] }> = ({
  items,
}) => {
  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ul className="mobile-nav-list nav-list1 mt-0 p-0">
      {items.map((item, index) => (
        <li key={index}>
          <a href={`#${item.link}`} target="_blank">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Contact Info Component
const ContactInfo: React.FC<{ info: ContactInfoItem[] }> = ({ info }) => (
  <div className="single-footer">
    <h3>Contact Info</h3>
    <div className="footer1-contact-info">
      {info.map((item, index) => (
        <div className="contact-info-single" key={index}>
          <div className="contact-info-icon">
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <div className="contact-info-text">
            <a href={item.link}>{item.text}</a>
          </div>
        </div>
      ))}
      <div className="single-footer">
        <h3>Contact Info</h3>
        <div className="contact-info-single">
          <div className="contact-info-icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact-info-text">
            <Link to="#">
              55 East Birchwood Ave. Brooklyn, New York 11201, United States
            </Link>
          </div>
        </div>
      </div>
      <div className="single-footer">
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  </div>
);

// Social Links Component
const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="single-footer">
    <h3>Social Links</h3>
    <div className="social-links-mobile-menu">
      <ul className="p-0">
        {links.map((link, index) => (
          <li key={index} className="hash-has-sub me-1">
            <Link to={link.link} className="hash-nav">
              <i className={`fa-brands ${link.icon}`}></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MobileHeader: React.FC<{
  onToggleSidebar: () => void;
  logoUrl: string;
  headerClass: string;
}> = ({ onToggleSidebar, logoUrl, headerClass }) => {
  return (
    <div className={`mobile-header ${headerClass} d-block d-lg-none`}>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={logoUrl} alt="Logo" />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={onToggleSidebar}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const MobileSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  logoUrl: string;
  sidebarClass: string;
  btnClass: string;
}> = ({ isOpen, onClose, logoUrl, sidebarClass, btnClass }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`mobile-sidebar ${sidebarClass} ${
        isOpen ? "mobile-menu-active" : ""
      }`}
    >
      <div className="logosicon-area">
        <div className="logos">
          <img src={logoUrl} alt="Logo" />
        </div>
        <div className="menu-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="mobile-nav mobile-nav1">
        <NavigationList
          items={
            pathname.includes("single-index")
              ? homeItems
              : [...homeItems, ...navItems]
          }
        />
        {pathname.includes("single-index") && (
          <NavigationListSingle items={singlePageNavLinks()} />
        )}
        <div className="allmobilesection">
          <Link to="/contact" className={btnClass}>
            Get Started{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
          <ContactInfo info={contactInfo} />
        </div>
      </div>
    </div>
  );
};

const MobileHeaderSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [headerClass, setHeaderClass] = useState("");
  const [sidebarClass, setSidebarClass] = useState("");
  const [btnClass, setBtnClass] = useState("");

  useEffect(() => {
    switch (document.body.classList[0]) {
      case "homepage1-body":
        setLogoUrl("../assets/img/logo/logo1.png");
        setHeaderClass("mobile-header1");
        setSidebarClass("mobile-sidebar1");
        setBtnClass("header-btn1");
        break;
      case "homepage2-body":
        setLogoUrl("../assets/img/logo/logo2.png");
        setHeaderClass("mobile-header2");
        setSidebarClass("mobile-sidebar2");
        setBtnClass("header-btn3");
        break;
      case "homepage4-body":
        setLogoUrl("../assets/img/logo/logo2.png");
        setHeaderClass("mobile-header4");
        setSidebarClass("mobile-sidebar4");
        setBtnClass("header-btn12");
        break;
      case "homepage5-body":
        setLogoUrl("../assets/img/logo/logo2.png");
        setHeaderClass("mobile-header5");
        setSidebarClass("mobile-sidebar5");
        setBtnClass("header-btn9");
        break;
      case "homepage3-body":
        setLogoUrl("../assets/img/logo/logo2.png");
        setHeaderClass("mobile-header2");
        setSidebarClass("mobile-sidebar2");
        setBtnClass("header-btn3");
        break;
      case "homepage7-body":
        setLogoUrl("../assets/img/logo/logo2.png");
        setHeaderClass("mobile-header7");
        setSidebarClass("mobile-sidebar7");
        setBtnClass("header-btn13");
        break;
      case "homepage8-body":
        setLogoUrl("../assets/img/logo/logo9.png");
        setHeaderClass("mobile-header8");
        setSidebarClass("mobile-sidebar8");
        setBtnClass("header-btn15");
        break;
      case "homepage9-body":
        setLogoUrl("../assets/img/logo/logo10.png");
        setHeaderClass("mobile-header9");
        setSidebarClass("mobile-sidebar9");
        setBtnClass("header-btn16");
        break;
      case "homepage10-body":
        setLogoUrl("../assets/img/logo/logo11.png");
        setHeaderClass("mobile-header10");
        setSidebarClass("mobile-sidebar10");
        setBtnClass("header-btn17");
        break;
      default:
        setLogoUrl("../assets/img/logo/logo1.png");
        setHeaderClass("mobile-header1");
        setSidebarClass("sidebarClass");
        setBtnClass("header-btn1");
        break;
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <MobileHeader
        onToggleSidebar={toggleSidebar}
        logoUrl={logoUrl}
        headerClass={headerClass}
      />
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        logoUrl={logoUrl}
        sidebarClass={sidebarClass}
        btnClass={btnClass}
      />
    </>
  );
};

export default MobileHeaderSidebar;
