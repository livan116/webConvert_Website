import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage1 from "../Pages/index1/Index";
// import HomePage2 from "../Pages/index2/Index";
// import HomePage3 from "../Pages/index3/Index";
// import HomePage4 from "../Pages/index4/Index";
// import HomePage5 from "../Pages/index5/Index";
// import HomePage6 from "../Pages/index6/Index";
// import HomePage7 from "../Pages/index7/Index";
// import HomePage8 from "../Pages/index8/Index";
// import HomePage9 from "../Pages/index9/Index";
// import HomePage10 from "../Pages/index10/Index";
// import SingleHomePage1 from "../Pages/single-index1/Index";
// import SingleHomePage2 from "../Pages/single-index2/Index";
// import SingleHomePage3 from "../Pages/sing le-index3/Index";
// import SingleHomePage4 from "../Pages/single-index4/Index";
// import SingleHomePage5 from "../Pages/single-index5/Index";
// import SingleHomePage6 from "../Pages/single-index6/Index";
// import SingleHomePage7 from "../Pages/single-index7/Index";
// import SingleHomePage8 from "../Pages/single-index8/Index";
// import SingleHomePage9 from "../Pages/single-index9/Index";
// import SingleHomePage10 from "../Pages/single-index10/Index";

import Case from "../Pages/Case/Index";
import CaseSingle from "../Pages/Case-Single/Index";

import BlogPage from "../Pages/Blog/Index";
import BlogLeft from "../Pages/Blog left";
import BlogRight from "../Pages/Blog Right";
import BlogSingle from "../Pages/Blog Single";

import Service1Page from "../Pages/service1";
import Service2Page from "../Pages/service2";
import Service3Page from "../Pages/service3";
import Service4Page from "../Pages/service4";
import Service5Page from "../Pages/service5";

import FAQPage from "../Pages/Faq/Index";
import TestimonialPage from "../Pages/Testimonials/Index";
import PricingPage from "../Pages/Pricing/Index";
import About from "../Pages/About/Index";
import Contact from "../Pages/Contact/Index";
import Team from "../Pages/Team/Index";

import NotFoundPage from "../Pages/404/Index";
import HelpCenterPage from "../Pages/HelpCenterPage/HelpCenterPage";

import RefundPolicy from "../Pages/Refund-Policy/RefundPolicy";
import PrivacyPolicy from "../Pages/Privacy-Policy/PrivacyPolicy";
import TermsAndConditions from "../Pages/Terms-And-Conditions/TermsAndConditions";
import Booking from "../Components/Booking/Booking";

const routesConfig = [
  // Home page routes
  { path: "/", element: <HomePage1 /> },
 
  // Case routes
  { path: "/case", element: <Case /> },
  { path: "/case-single", element: <CaseSingle /> },

  // Blog routes
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog-left", element: <BlogLeft /> },
  { path: "/blog-right", element: <BlogRight /> },
  { path: "/blog-single", element: <BlogSingle /> },

  // Services routes
  { path: "/service1", element: <Service1Page /> },
  { path: "/service2", element: <Service2Page /> },
  { path: "/service3", element: <Service3Page /> },
  { path: "/service4", element: <Service4Page /> },
  { path: "/service5", element: <Service5Page /> },

  // Other routes
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/team", element: <Team /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/testimonials", element: <TestimonialPage /> },
  { path: "/pricing", element: <PricingPage /> },
  { path: "/booking", element: <Booking /> },

  // Not found routes
  { path: "/help", element: <HelpCenterPage /> },
  { path: "/404", element: <NotFoundPage /> },
  { path: "/*", element: <NotFoundPage /> },

  { path: "/refund", element: <RefundPolicy /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsAndConditions /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routesConfig);
  return <>{element}</>;
};

export default AppRoutes;
