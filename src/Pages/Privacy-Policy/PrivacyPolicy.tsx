import React, { useState, useEffect, ReactNode } from "react";
// import "./PrivacyPolicy.css";
import {
  ChevronDown,

  Eye,
  Lock,
  Bell,
  FileText,
  Users,
} from "lucide-react";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import Footer from "../../Layouts/Footer";
import PageHero from "../../Components/Common/PageHero";

// Interface definitions
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

interface PolicySectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

interface LastUpdatedProps {
  date: string;
}

// AnimatedSection component for fade-in sections
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDuration: "700ms" }}
    >
      {children}
    </div>
  );
};

// PolicySection component for each policy section with collapsible content
const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="card mb-3 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="d-flex align-items-center justify-content-between w-100 p-3 text-start bg-white border-0"
        style={{ transition: "background-color 0.2s" }}
      >
        <div className="d-flex align-items-center">
          {icon}
          <h3 className="ms-3 fs-5 fw-medium text-dark">{title}</h3>
        </div>
        <ChevronDown
          className={`text-secondary transition ${isOpen ? "rotate-180" : ""}`}
          style={{ transitionDuration: "300ms" }}
        />
      </button>

      <div
        className={`overflow-hidden transition ${isOpen ? "" : "collapse"}`}
        style={{ transitionDuration: "300ms" }}
      >
        <div className="p-3 bg-light border-top">{children}</div>
      </div>
    </div>
  );
};

// LastUpdated component showing when policy was last updated
const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => (
  <p className="text-secondary small mb-4">
    Last Updated: <time dateTime={date}>{date}</time>
  </p>
);

// IntroSection component for the privacy policy introduction
const IntroSection: React.FC = () => (
  <div className="mb-4">
    <h2 className="fs-4 fw-semibold text-dark mb-3">
      Our Commitment to Privacy
    </h2>
    <p className="text-secondary mb-3">
      At [Company Name], we take your privacy seriously. This Privacy Policy
      explains how we collect, use, disclose, and safeguard your information
      when you visit our website or use our services.
    </p>
    <p className="text-secondary">
      Please read this Privacy Policy carefully. By accessing or using our
      service, you acknowledge that you have read, understood, and agree to be
      bound by all the terms outlined in this policy.
    </p>
  </div>
);

// The main Privacy Policy component
const PrivacyPolicy: React.FC = () => {
  return (
    <>
    <Header/>
    <MobileHeaderSidebar/>
    <PageHero
        className="about-header-area"
        title={"Privacy Policy"}
        breadcrumb={["Home", "Privacy Policy"]}
      />
    <div className="min-vh-100 bg-gradient">
      <div className="px-5 py-5">
        <AnimatedSection>
          <div className="text-center mb-5">
            {/* <div className="d-inline-flex align-items-center justify-content-center p-3 bg-primary bg-opacity-10 rounded-circle mb-3">
              <Shield
                className="text-primary"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div> */}
            {/* <h1 className="display-5 fw-bold text-dark mb-2">Privacy Policy</h1> */}
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <PolicySection
            title="Information We Collect"
            icon={
              <Eye
                className="text-primary"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <h4 className="fw-medium text-dark">Personal Information</h4>
              <p className="text-secondary">
                We may collect personal information that you voluntarily provide
                when using our service, including but not limited to your name,
                email address, phone number, and billing information.
              </p>

              <h4 className="fw-medium text-dark">Usage Data</h4>
              <p className="text-secondary">
                We automatically collect certain information when you visit,
                use, or navigate our website. This information may include your
                IP address, browser type, operating system, referring URLs,
                device information, and pages visited.
              </p>

              <h4 className="fw-medium text-dark">
                Cookies and Similar Technologies
              </h4>
              <p className="text-secondary">
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <PolicySection
            title="How We Use Your Information"
            icon={
              <FileText
                className="text-success"
                style={{ width: "1.25rem", height: "1.25rem" }}
                />
              }
              >
            <div className="mb-3">
              <p className="text-secondary">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">To provide and maintain our service</li>
                <li className="mb-2">
                  To notify you about changes to our service
                </li>
                <li className="mb-2">
                  To allow you to participate in interactive features
                </li>
                <li className="mb-2">To provide customer support</li>
                <li className="mb-2">
                  To gather analysis or valuable information to improve our
                  service
                </li>
                <li className="mb-2">To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <PolicySection
            title="Data Security"
            icon={
              <Lock
                className="text-danger"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                We implement appropriate technical and organizational security
                measures to protect your personal data against accidental or
                unlawful destruction, loss, alteration, unauthorized disclosure,
                or access.
              </p>
              <p className="text-secondary">
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While
                we strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <PolicySection
            title="Third-Party Disclosure"
            icon={
              <Users
                className="icon"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary">
                We may share your information with third parties in certain
                situations:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">
                  Business partners, vendors, and service providers who perform
                  services on our behalf
                </li>
                <li className="mb-2">
                  In connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition
                </li>
                <li className="mb-2">To comply with legal obligations</li>
                <li className="mb-2">
                  To protect and defend our rights or property
                </li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <PolicySection
            title="Your Privacy Rights"
            icon={
              <Bell
                className="text-warning"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">
                  <span className="fw-medium">Access:</span> You may request
                  copies of your personal information.
                </li>
                <li className="mb-2">
                  <span className="fw-medium">Rectification:</span> You may
                  request that we correct inaccurate information.
                </li>
                <li className="mb-2">
                  <span className="fw-medium">Deletion:</span> You may request
                  that we delete your personal information.
                </li>
                <li className="mb-2">
                  <span className="fw-medium">Restriction:</span> You may
                  request that we restrict the processing of your information.
                </li>
                <li className="mb-2">
                  <span className="fw-medium">Data Portability:</span> You may
                  request to receive your personal information in a structured,
                  machine-readable format.
                </li>
                <li>
                  <span className="fw-medium">Objection:</span> You may object
                  to our processing of your information.
                </li>
              </ul>
              <p className="text-secondary mt-3">
                To exercise any of these rights, please contact us using the
                information provided in the "Contact Us" section.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <div className="privacy bg-opacity-10 rounded p-4 border border-info border-opacity-25 mt-4">
            <h3 className="fs-5 fw-medium text-dark mb-3">Contact Us</h3>
            <p className="text-secondary mb-3">
              If you have any questions or concerns about our Privacy Policy or
              data practices, please contact us at:
            </p>
            <div className="text-dark">
              <p>
                <span className="fw-medium">Email:</span> privacy@company.com
              </p>
              <p>
                <span className="fw-medium">Address:</span> 123 Privacy Street,
                Data City, 12345
              </p>
              <p>
                <span className="fw-medium">Phone:</span> (555) 123-4567
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
