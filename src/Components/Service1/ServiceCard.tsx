// src/components/ServiceCard.tsx
import React from "react";
import { Link } from "react-router-dom";

export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="service-boxarea">
        <Link to={service.link} className="service-link">
          {service.title}
        </Link>
        <div className="space40"></div>
        <img src={service.icon} alt={service.title} className="service-icon" />
        <div className="space40"></div>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
