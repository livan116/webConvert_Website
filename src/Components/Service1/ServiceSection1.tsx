import React from "react";
import ServiceCard from "./ServiceCard";

export interface service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: service[] = [
  {
    title: "Search Engine Optimization ( SEO)",
    description:
      "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
    icon: "../assets/img/icons/service-icon1.svg",
    link: "/service1",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.",
    icon: "../assets/img/icons/service-icon2.svg",
    link: "/service1",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns",
    icon: "../assets/img/icons/service-icon3.svg",
    link: "/service1",
  },
  {
    title: "Website Design and Development",
    description:
      "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure.",
    icon: "../assets/img/icons/service-icon4.svg",
    link: "/service1",
  },
  {
    title: "Content Marketing",
    description:
      "We craft compelling content that educates, entertains, and inspires your audience, driving engagement and building brand loyalty.",
    icon: "../assets/img/icons/service-icon15.svg",
    link: "/service1",
  },
  {
    title: "Email Marketing",
    description:
      "We design and implement effective email marketing campaigns to nurture leads, promote products or services, and drive conversions.",
    icon: "../assets/img/icons/service-icon16.svg",
    link: "/service1",
  },
  {
    title: "Analytics And Reporting",
    description:
      "We track and measure the performance of your digital marketing campaigns using advanced analytics tools.",
    icon: "../assets/img/icons/service-icon17.svg",
    link: "/service1",
  },
  {
    title: "One Page SEO Optimization",
    description:
      "We optimize key on-page elements of your website, including title tags, meta descriptions, headers, and content with your target keywords.",
    icon: "../assets/img/icons/service-icon18.svg",
    link: "/service1",
  },
];

const ServiceSection1: React.FC = () => {
  return (
    <div className="service1-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-all-boxes-area1">
              <div className="row">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection1;
