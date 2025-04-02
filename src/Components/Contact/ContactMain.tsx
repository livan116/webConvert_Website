import React from 'react';

const ContactMain: React.FC = () => {
  return (
    <div className="contact-main-inner-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading2 contact-header">
              <h5>Contact Us</h5>
              <h2>Get in Touch with SEOC. We Value Your Connection</h2>
              <p>
                Our dedicated team is committed to providing prompt and effective support to ensure your needs are met.
                We believe in open communication and are always ready to listen. Reach out to us via phone, email, or
                live chat, or visit our office during business hours.
              </p>
              <div className="space32"></div>
              <div className="number-address-area">
                <div className="phone-number">
                  <div className="img1">
                    <img src="../assets/img/icons/phone3.svg" alt="Phone Icon" />
                  </div>
                  <div className="content">
                    <p>Phone Number</p>
                    <a href="tel:123-456-7890">123-456-7890</a>
                  </div>
                </div>

                <div className="phone-number m-0">
                  <div className="img1">
                    <img src="../assets/img/icons/email3.svg" alt="Email Icon" />
                  </div>
                  <div className="content">
                    <p>Email Address</p>
                    <a href="mailto:Infoseoc@gmail.com">Infoseoc@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="space20"></div>
              <div className="number-address-area2 ">
                <div className="phone-number m-0 ">
                  <div className="img1">
                    <img src="../assets/img/icons/location3.svg" alt="Location Icon" />
                  </div>
                  <div className="content">
                    <a href="#">
                      8708 Technology Forest Pl Suite <br className="d-lg-block d-none" />
                      125 -G, The Woodlands, TX 773
                    </a>
                  </div>
                </div>

                <div className="phone-number mt-2">
                  <a
                    href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu"
                    className="map"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Our Map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="contact-form-area">
              <h4>Get In Touch</h4>
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-area">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-area">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-area">
                    <textarea placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-area">
                    <button type="submit" className="header-btn1">
                      Get In Touch <span><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
