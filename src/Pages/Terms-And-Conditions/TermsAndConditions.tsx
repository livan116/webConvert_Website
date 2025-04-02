import React, { useState, useEffect, ReactNode } from "react";
import {
  ChevronDown,
  FileText,

  Clock,
  AlertTriangle,
  ShieldAlert,
  Handshake,
  Globe,
} from "lucide-react";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import PageHero from "../../Components/Common/PageHero";

// Interface definitions
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

interface TermsSectionProps {
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

// TermsSection component for each terms section with collapsible content
const TermsSection: React.FC<TermsSectionProps> = ({
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

// LastUpdated component showing when terms were last updated
const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => (
  <p className="text-secondary small mb-4">
    Last Updated: <time dateTime={date}>{date}</time>
  </p>
);

// IntroSection component for the terms introduction
const IntroSection: React.FC = () => (
  <div className="mb-4">
    <h2 className="fs-4 fw-semibold text-dark mb-3">Agreement to Terms</h2>
    <p className="text-secondary mb-3">
      These Terms and Conditions constitute a legally binding agreement made
      between you, whether personally or on behalf of an entity ("you") and
      [Company Name] ("we," "us" or "our"), concerning your access to and use of
      our website as well as any other media form, media channel, mobile website
      or mobile application related, linked, or otherwise connected thereto
      (collectively, the "Site").
    </p>
    <p className="text-secondary">
      You agree that by accessing the Site, you have read, understood, and agree
      to be bound by all of these Terms and Conditions. If you do not agree with
      all of these Terms and Conditions, then you are expressly prohibited from
      using the Site and you must discontinue use immediately.
    </p>
  </div>
);

// The main Terms and Conditions component
const TermsAndConditions: React.FC = () => {
  return (
    <>
    <Header/>
    <MobileHeaderSidebar/>
    <PageHero
        className="about-header-area"
        title={"Terms and Conditions"}
        breadcrumb={["Home", "Terms and Conditions"]}
      />
    <div className="min-vh-100 bg-gradient">
      <div className="px-5 py-5">
        <AnimatedSection>
          <div className="text-center mb-5">
            {/* <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle mb-3 bg-primary bg-opacity-10">
              <Scale
                className="text-primary"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div> */}
            {/* <h1 className="display-5 fw-bold text-dark mb-2">
              Terms and Conditions
            </h1> */}
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <TermsSection
            title="Use License"
            icon={
              <FileText
                className="text-primary"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                Permission is granted to temporarily download one copy of the
                materials on the Site for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">Modify or copy the materials</li>
                <li className="mb-2">
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li className="mb-2">
                  Attempt to reverse engineer any software contained on the Site
                </li>
                <li className="mb-2">
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li className="mb-2">
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
              <p className="text-secondary">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by us at any time.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <TermsSection
            title="User Representations"
            icon={
              <Handshake
                className="text-success"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">
                  You have the legal capacity to accept these Terms and
                  Conditions
                </li>
                <li className="mb-2">You are at least 18 years of age</li>
                <li className="mb-2">
                  You will not access the Site through automated or non-human
                  means
                </li>
                <li className="mb-2">
                  You will not use the Site for any illegal or unauthorized
                  purpose
                </li>
                <li className="mb-2">
                  Your use of the Site will not violate any applicable law or
                  regulation
                </li>
              </ul>
              <p className="text-secondary">
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Site.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <TermsSection
            title="Prohibited Activities"
            icon={
              <AlertTriangle
                className="text-danger"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
              <p className="text-secondary mb-3">
                As a user of the Site, you agree not to:
              </p>
              <ul className="list-disc ps-4 text-secondary">
                <li className="mb-2">
                  Systematically retrieve data or other content from the Site to
                  create a collection, compilation, database, or directory
                </li>
                <li className="mb-2">
                  Make any unauthorized use of the Site, including collecting
                  usernames, email addresses, or passwords
                </li>
                <li className="mb-2">
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site
                </li>
                <li className="mb-2">
                  Use the Site to advertise or offer to sell goods and services
                </li>
                <li className="mb-2">
                  Engage in unauthorized framing of or linking to the Site
                </li>
                <li className="mb-2">
                  Upload or transmit viruses, Trojan horses, or other material
                  that interferes with any party's use of the Site
                </li>
                <li>
                  Use any device, software, or routine that interferes with the
                  proper working of the Site
                </li>
              </ul>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <TermsSection
            title="Intellectual Property Rights"
            icon={
              <ShieldAlert
                className="icon"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the "Content") and the trademarks, service
                marks, and logos contained therein (the "Marks") are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights.
              </p>
              <p className="text-secondary">
                The Content and the Marks are provided on the Site "AS IS" for
                your information and personal use only. Except as expressly
                provided in these Terms and Conditions, no part of the Site and
                no Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or
                otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <TermsSection
            title="Term and Termination"
            icon={
              <Clock
                className="text-warning"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                These Terms and Conditions shall remain in full force and effect
                while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE TERMS AND CONDITIONS OR OF ANY
                APPLICABLE LAW OR REGULATION.
              </p>
              <p className="text-secondary">
                We may terminate your use or participation in the Site or delete
                any content or information that you posted at any time, without
                warning, in our sole discretion.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <TermsSection
            title="Governing Law"
            icon={
              <Globe
                className="text-info"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="mb-3">
              <p className="text-secondary mb-3">
                These Terms and Conditions and your use of the Site are governed
                by and construed in accordance with the laws of the State of
                [State], applicable to agreements made and to be entirely
                performed within the State of [State], without regard to its
                conflict of law principles.
              </p>
              <p className="text-secondary">
                Any legal action of whatever nature brought by either you or us
                shall be commenced or prosecuted in the state and federal courts
                located in [County], [State], and you hereby consent to, and
                waive all defenses of lack of personal jurisdiction and forum
                non conveniens with respect to venue and jurisdiction in such
                state and federal courts.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="terms rounded p-4 border border-primary border-opacity-25 mt-4">
            <h3 className="fs-5 fw-medium text-dark mb-3">Contact Us</h3>
            <p className="text-secondary mb-3">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="text-dark">
              <p>
                <span className="fw-medium">Email:</span> legal@company.com
              </p>
              <p>
                <span className="fw-medium">Address:</span> 123 Legal Avenue,
                Terms City, 12345
              </p>
              <p>
                <span className="fw-medium">Phone:</span> (555) 987-6543
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

export default TermsAndConditions;
