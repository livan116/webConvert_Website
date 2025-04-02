import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CtaSection: React.FC = () => {
  return (
    <div className="cta-section-area overflow-hidden">
      <motion.img
        src="../assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="../assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              <motion.h2
                className="text-anime-style-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready To Take Your SEO To <br className="d-md-block d-none" />
                The Next Level
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Effective SEO strategies not only elevate a website's
                visibility but also drive <br className="d-md-block d-none" />
                targeted traffic, enhance user experience,
              </motion.p>
              <motion.div
                className="btn-area text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/contact" className="header-btn1">
                  Free Consultation
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
        </div>
      </div>
    </div>
  );
};

export default CtaSection;