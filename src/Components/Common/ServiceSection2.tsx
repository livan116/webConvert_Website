import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSection2: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className || ""} id="work">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service2-header heading2 text-center">
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star3"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.h2
                className="text-anime-style-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Tailored Solutions, Proven Results,
                <br className="d-md-block d-none" />
                And Exceptional Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our <br className="d-md-block d-none" />
                approach is centered on understanding your business inside.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <motion.div
              className="images-content-area"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="img1">
                <img src="../assets/img/all-images/service-img1.png" alt="" />
              </div>
              <div className="content-area">
                <h5>Our Value</h5>
                <Link to="/service1" className="text text-anime-style-3">
                  Explore Our Unique Value Proposition & How We Drive Business
                  Growth
                </Link>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  We're committed to delivering exceptional value to our
                  clients. We understand that every business is unique, and we
                  take a personalized approach to every project we undertake.
                </motion.p>
                <motion.div
                  className="btn-area"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Link to="/service1" className="header-btn1">
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
              <motion.div 
                className="arrow-area"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/service1">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-5">
            <div className="service-all-boxes">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <motion.div
                    className="service2-author-boxarea"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="arrow"
                      whileHover={{ scale: 1.1, x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link to="/service1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </motion.div>
                    <div className="content-area">
                      <h5>Our Mission</h5>
                      <Link to="/service1">
                        We strive to be more than just a service provider; we
                        aim to be a trusted SEOC.
                      </Link>
                      <p>
                        By staying true to our mission and values, we are
                        committed to helping businesses of all sizes achieve
                        their goals and realize their potential.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <motion.div
                    className="service2-author2-boxarea"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="arrow"
                      whileHover={{ scale: 1.1, x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link to="/service1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </motion.div>
                    <div className="content-area">
                      <h5>Our Vision</h5>
                      <Link to="/service1">
                        We aspire to create a world where every business owner
                        feels empowered.
                      </Link>
                      <p>
                        By staying true to our vision and values, we are
                        committed to driving positive change and shaping a
                        brighter future for businesses and communities.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;