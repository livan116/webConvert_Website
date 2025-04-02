import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
}

// interface HomeMenuItem {
//   imageSrc: string;
//   multiPageLink: string;
//   onePageLink: string;
//   isNew?: boolean;
//   isHot?: boolean;
// }



const menuItems: MenuItem[] = [
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/service1",
   
  },
  {
    label: "Blogs",
    to: "/blog",

  },
  {
    label: "Pages",
    to: "#",
    dropdown: [
      { label: "Case Study", to: "/case" },
      { label: "Case Study Single", to: "/case-single" },
      { label: "Our Team", to: "/team" },
      { label: "Pricing Plan", to: "/pricing" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "FAQ", to: "/faq" },
      { label: "Booking", to: "/booking" },  
      { label: "Help Center", to: "/help" },  
      { label: "Privacy Policy", to: "/privacy" },  
      { label: "Refund Policy", to: "/refund" },  
      { label: "Terms And Conditions", to: "/terms" },  
      { label: "404", to: "/404" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <header
      className={`header-area homepage1 header header-sticky d-none d-lg-block ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-elements">
              <div className="site-logo">
                <Link to="/">
                  <img src="../assets/img/logo/logo1.png" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu">
                <ul className="m-0">
                  <li>
                    <Link to="/">
                      Home 
                    </Link>
                 
                  </li>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.to}>
                        {item.label}{" "}
                        {item.dropdown && (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </Link>
                      {item.dropdown && (
                        <ul className="dropdown-padding">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.to}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="btn-area">
                <div className="search-icon header__search header-search-btn">
                  <Link to="#">
                    <img
                      src="../assets/img/icons/search-icons1.svg"
                      alt="Search"
                    />
                  </Link>
                </div>
                <Link to="/contact" className="header-btn1">
                  Free Consultation
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
              <div className="header-search-form-wrapper">
                <div className="tx-search-close tx-close">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="header-search-container">
                  <form role="search" className="search-form">
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search …"
                      name="s"
                    />
                    <button type="submit" className="search-submit">
                      <img
                        src="../assets/img/icons/search-icons1.svg"
                        alt="Search"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
