import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
}

interface HomeMenuItem {
  imageSrc: string;
  multiPageLink: string;
  onePageLink: string;
  isNew?: boolean;
  isHot?: boolean;
}

const homeMenuItems: HomeMenuItem[] = [
  {
    imageSrc: "demo-img1.png",
    multiPageLink: "/",
    onePageLink: "/single-index1",
  },
  {
    imageSrc: "demo-img2.png",
    multiPageLink: "/index2",
    onePageLink: "/single-index2",
  },
  {
    imageSrc: "comming-soon.png",
    multiPageLink: "/index3",
    onePageLink: "/single-index3",
  },
  {
    imageSrc: "demo-img3.png",
    multiPageLink: "/index4",
    onePageLink: "/single-index4",
  },
  {
    imageSrc: "demo-img4.png",
    multiPageLink: "/index5",
    onePageLink: "/single-index5",
  },
  {
    imageSrc: "demo-img5.png",
    multiPageLink: "/index6",
    onePageLink: "/single-index6",
  },
  {
    imageSrc: "demo-img6.png",
    multiPageLink: "/index7",
    onePageLink: "/single-index7",
    isNew: true,
  },
  {
    imageSrc: "demo-img7.png",
    multiPageLink: "/index8",
    onePageLink: "/single-index8",
    isNew: true,
  },
  {
    imageSrc: "demo-img8.png",
    multiPageLink: "/index9",
    onePageLink: "/single-index9",
    isNew: true,
  },
  {
    imageSrc: "demo-img9.png",
    multiPageLink: "/index10",
    onePageLink: "/single-index10",
    isHot: true,
  },
];

const menuItems: MenuItem[] = [
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "#",
    dropdown: [
      { label: "Service One", to: "/service1" },
      { label: "Service Two", to: "/service2" },
      { label: "Service Three", to: "/service3" },
      { label: "Service Four", to: "/service4" },
      { label: "Service Five", to: "/service5" },
    ],
  },
  {
    label: "Blogs",
    to: "#",
    dropdown: [
      { label: "Blog One", to: "/blog" },
      { label: "Blog Left", to: "/blog-left" },
      { label: "Blog Right", to: "/blog-right" },
      { label: "Blog Single", to: "/blog-single" },
    ],
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
      { label: "404", to: "/404" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

const Header5: React.FC = () => {
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
      className={`header-area homepage3 header header-sticky d-none d-lg-block ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-elements">
              <div className="site-logo">
                <Link to="/">
                  <img src="src/assets/img/logo/logo4.png" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu d-flex align-items-center gap-3">
                <ul className="m-0">
                  <li>
                    <Link to="#">
                      Home <i className="fa-solid fa-angle-down"></i>
                    </Link>
                    <div className="tp-submenu">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="all-images-menu home-menu">
                            {homeMenuItems.map((item, index) => (
                              <div key={index}>
                                <div className="homemenu-thumb">
                                  <div className="img1">
                                    <img
                                      src={`src/assets/img/all-images/${item.imageSrc}`}
                                      alt=""
                                    />
                                  </div>
                                  {item.isNew && (
                                    <div className="text">
                                      <h2>NEW</h2>
                                    </div>
                                  )}
                                  {item.isHot && (
                                    <div className="text">
                                      <h2>HOT</h2>
                                    </div>
                                  )}
                                  <div className="homemenu-btn">
                                    <Link
                                      className="header-btn4"
                                      to={item.multiPageLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Multi Page
                                    </Link>
                                    <div className="space16"></div>
                                    <Link
                                      className="header-btn4"
                                      to={item.onePageLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
                <Link to="/contact" className="header-btn5">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header5;
