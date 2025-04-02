import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <div className="about1-section-area sp6" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-images">
              <motion.figure
                className="image-anime"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="../assets/img/all-images/about-img1.png"
                  alt="About"
                />
              </motion.figure>
              <motion.img
                src="../assets/img/elements/star1.png"
                alt="Star"
                className="star1"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-content-area heading2">
              <motion.div
                className="arrow-circle"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/about">
                  <motion.img
                    src="../assets/img/elements/elements4.png"
                    alt="Element"
                    className="elements4"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="../assets/img/icons/arrow.svg"
                    alt="Arrow"
                    className="arrow"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Link>
              </motion.div>
              <motion.h2 
                className="text-anime-style-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Comprehensive SEO & Digital Marketing Solutions.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Welcome to SEOC, your trusted partner for comprehensive SEO and
                digital marketing solutions. With our proven expertise and
                innovative strategies the digital landscape.
              </motion.p>
              <motion.div
                className="btn-area"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to="tel:123456789" className="header-btn1">
                  Call us now
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
          </div>
          <div className="col-lg-3">
            <div className="about-auhtor-images">
              <motion.img
                src="../assets/img/elements/elements5.png"
                alt="Element"
                className="elements5"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.figure
                className="image-anime"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="../assets/img/all-images/about-img2.png"
                  alt="About Author"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;