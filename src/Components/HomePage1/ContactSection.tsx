import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const options = [
    { value: "Belgium", label: "Belgium" },
    { value: "Brazil", label: "Brazil" },
    { value: "Argentina", label: "Argentina" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Germany", label: "Germany" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="contact1-section-area sp6" id="contact">
      <div className="container">
        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading2">
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.h2 className="text-anime-style-3" variants={itemFadeIn}>
                Get In Touch With Us Today
              </motion.h2>
              <motion.p variants={itemFadeIn}>
                We're here to help! If you have any questions or would like to
                discuss <br className="d-md-block d-none" />
                how our SEO and digital marketing services can benefit your
                business,
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="row">
          <motion.div
            className="col-lg-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="contact-info-area" variants={fadeInUp}>
              <motion.h3 variants={itemFadeIn}>Contact Info</motion.h3>
              <motion.p variants={itemFadeIn}>
                We're here to help! If you have any questions or would like to
                discuss how our SEO and digital marketing services can benefit
                your business,
              </motion.p>
              <div className="space32"></div>

              <motion.div
                className="contact-author-box"
                variants={itemFadeIn}
                whileHover={{ x: 5, transition: { duration: 0.6 } }}
              >
                <div className="icons">
                  <motion.img
                    src="../assets/img/icons/location2.svg"
                    alt=""
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <Link to="#">
                    8708 Technology Forest Pl Suite
                    <br className="d-lg-block d-none" />
                    125 -G, The Woodlands, TX 773
                  </Link>
                </div>
              </motion.div>

              <div className="space40"></div>

              <motion.div
                className="contact-author-box"
                variants={itemFadeIn}
                whileHover={{ x: 5, transition: { duration: 0.6 } }}
              >
                <div className="icons">
                  <motion.img
                    src="../assets/img/icons/phone2.svg"
                    alt=""
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <Link to="tel:123-456-7890">
                    123-456-7890 <br />
                    123-456-7890
                  </Link>
                </div>
              </motion.div>

              <div className="space40"></div>

              <motion.div
                className="contact-author-box"
                variants={itemFadeIn}
                whileHover={{ x: 5, transition: { duration: 0.6 } }}
              >
                <div className="icons">
                  <motion.img
                    src="../assets/img/icons/email2.svg"
                    alt=""
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <Link to="mailto:infoseoc@gmail.com">
                    infoseoc@gmail.com <br />
                    infoseoc@gmail.com
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.div className="contact-boxarea" variants={fadeInUp}>
              <motion.h3 variants={itemFadeIn}>Get In Touch</motion.h3>
              <motion.p variants={itemFadeIn}>
                We're here to help! If you have any questions or would like to
                discuss <br className="d-lg-block d-none" />
                how our SEO and digital marketing services can benefit your
                business,
              </motion.p>

              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <motion.div className="col-lg-6" variants={formItemVariants}>
                    <div className="input-area">
                      <motion.input
                        type="text"
                        placeholder="First Name"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-6" variants={formItemVariants}>
                    <div className="input-area">
                      <motion.input
                        type="text"
                        placeholder="Last Name"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-6" variants={formItemVariants}>
                    <div className="input-area">
                      <motion.input
                        type="email"
                        placeholder="Email Address"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-6" variants={formItemVariants}>
                    <div className="input-area">
                      <motion.input
                        type="number"
                        placeholder="Phone Number"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-12" variants={formItemVariants}>
                    <div className="input-area mt-4">
                      <Select className="country-area" options={options} />
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-12" variants={formItemVariants}>
                    <div className="input-area">
                      <motion.textarea
                        placeholder="Your Message"
                        required
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.6 }}
                      ></motion.textarea>
                    </div>
                  </motion.div>

                  <motion.div className="col-lg-12" variants={buttonVariants}>
                    <div className="input-area">
                      <motion.button
                        className="header-btn1"
                        variants={buttonVariants}
                        whileHover="hover"
                      >
                        Free Consultation
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
