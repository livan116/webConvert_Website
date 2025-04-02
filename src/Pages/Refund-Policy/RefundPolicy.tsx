import React, { useState, useEffect, ReactNode } from "react";
import {
  ChevronDown,
 
  CalendarClock,
  CreditCard,
  ShoppingCart,
  HelpCircle,
  Store,
  ReceiptText,
} from "lucide-react";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import PageHero from "../../Components/Common/PageHero";
import Footer from "../../Layouts/Footer";

// Type definitions for component props
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDuration: "700ms",
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
      }}
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
  const [isOpen, setIsOpen] = useState(false);

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
          style={{
            transitionDuration: "300ms",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
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
  <p className="text-muted mb-4 fs-6">
    Last Updated: <time dateTime={date}>{date}</time>
  </p>
);

// IntroSection component for the refund policy introduction
const IntroSection: React.FC = () => (
  <div className="mb-4">
    <h2 className="fs-4 fw-semibold text-dark mb-3">Our Refund Policy</h2>
    <p className="text-secondary mb-3">
      At [Company Name], we strive to ensure your complete satisfaction with our
      products and services. This Refund Policy outlines our procedures and
      guidelines regarding returns, refunds, and exchanges.
    </p>
    <p className="text-secondary">
      We encourage you to read this policy carefully before making a purchase.
      By placing an order with us, you agree to the terms outlined in this
      Refund Policy.
    </p>
  </div>
);

// The main Refund Policy component
const RefundPolicy: React.FC = () => {
  return (
    <>
    <Header/>
    <MobileHeaderSidebar/>
    <PageHero
        className="about-header-area"
        title={"Refund Policy"}
        breadcrumb={["Home", "Refund Policy"]}
      />
    <div className="min-vh-100 bg-light bg-gradient">
      <div className="px-5 py-5">
        <AnimatedSection>
          <div className="text-center mb-5">
            {/* <div className="d-inline-flex align-items-center justify-content-center p-3 bg-success bg-opacity-10 rounded-circle mb-3">
              <RefreshCw
                className="text-success"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div> */}
            {/* <h1 className="display-5 fw-bold text-dark mb-2">Refund Policy</h1> */}
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <PolicySection
            title="Eligibility for Refunds"
            icon={
              <ShoppingCart
                className="text-success"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary">
                To be eligible for a refund, please make sure the following
                conditions are met:
              </p>
              <ul className="ps-4 text-secondary">
                <li className="mb-2">
                  The item must be unused and in the same condition that you
                  received it
                </li>
                <li className="mb-2">
                  The item must be in its original packaging
                </li>
                <li className="mb-2">
                  You must have the receipt or proof of purchase
                </li>
                <li className="mb-2">
                  The return must be initiated within the specified return
                  period
                </li>
              </ul>
              <p className="text-secondary">
                The following items cannot be refunded:
              </p>
              <ul className="ps-4 text-secondary">
                <li className="mb-2">Gift cards</li>
                <li className="mb-2">Downloadable software products</li>
                <li className="mb-2">Custom or personalized items</li>
                <li className="mb-2">
                  Items marked as non-refundable at the time of purchase
                </li>
                <li className="mb-2">Certain health and personal care items</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <PolicySection
            title="Return Timeframe"
            icon={
              <CalendarClock
                className="text-warning"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary">
                To be eligible for a return, you must initiate the return
                process within:
              </p>
              <ul className="ps-4 text-secondary">
                <li className="mb-2">
                  <span className="fw-medium">30 days</span> of purchase for
                  most products
                </li>
                <li className="mb-2">
                  <span className="fw-medium">14 days</span> of purchase for
                  electronics
                </li>
                <li className="mb-2">
                  <span className="fw-medium">7 days</span> of purchase for
                  perishable items
                </li>
              </ul>
              <p className="text-secondary">
                If more than the specified timeframe has passed since your
                purchase, we are sorry but we cannot offer you a refund or
                exchange.
              </p>
              <p className="text-secondary">
                For seasonal, sale, or clearance items, please note that these
                may have different return timeframes which will be clearly
                indicated at the time of purchase.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <PolicySection
            title="Refund Process"
            icon={
              <ReceiptText
                className="text-primary"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary">
                Once we receive your returned item, we will inspect it and
                notify you that we have received your returned item. We will
                also notify you of the approval or rejection of your refund.
              </p>
              <p className="text-secondary">
                If approved, your refund will be processed, and a credit will be
                automatically applied to your original method of payment within:
              </p>
              <ul className="ps-4 text-secondary">
                <li className="mb-2">
                  <span className="fw-medium">3-5 business days</span> for
                  credit card payments
                </li>
                <li className="mb-2">
                  <span className="fw-medium">5-10 business days</span> for bank
                  transfers
                </li>
                <li className="mb-2">
                  <span className="fw-medium">1-2 business days</span> for store
                  credit or gift cards
                </li>
              </ul>
              <p className="text-secondary">
                Please note that depending on your credit card company, it may
                take an additional 2-10 business days after your credit is
                applied for it to post to your account.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <PolicySection
            title="Shipping Costs"
            icon={
              <Store
                className="icon"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary">
                Return shipping costs are the responsibility of the customer
                except in the following cases:
              </p>
              <ul className="ps-4 text-secondary">
                <li className="mb-2">
                  The item received was damaged or defective
                </li>
                <li className="mb-2">We sent you an incorrect item</li>
                <li className="mb-2">
                  The item differs significantly from its description
                </li>
              </ul>
              <p className="text-secondary">
                In these cases, we will provide a prepaid shipping label or
                reimburse your return shipping costs.
              </p>
              <p className="text-secondary">
                Original shipping costs are non-refundable. If you receive a
                refund, the cost of return shipping will be deducted from your
                refund unless one of the above exceptions applies.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <PolicySection
            title="Exchange Policy"
            icon={
              <CreditCard
                className="text-danger"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary">
                We are happy to exchange items that meet our return eligibility
                requirements. To request an exchange:
              </p>
              <ol className="ps-4 text-secondary">
                <li className="mb-2">
                  Contact our customer service team within the eligible return
                  period
                </li>
                <li className="mb-2">
                  Provide your order number and details of the item you wish to
                  exchange
                </li>
                <li className="mb-2">
                  Specify the item you would like to receive instead
                </li>
                <li className="mb-2">
                  Return the original item as directed by our customer service
                  team
                </li>
              </ol>
              <p className="text-secondary">
                If the exchange item is of greater value than your original
                purchase, you will need to pay the difference. If the exchange
                item is of lesser value, we will refund the difference to your
                original payment method.
              </p>
              <p className="text-secondary">
                Please note that we can only exchange items if the replacement
                is in stock. If the item is unavailable, we will issue a refund
                instead.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <PolicySection
            title="Frequently Asked Questions"
            icon={
              <HelpCircle
                className="text-warning"
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
            }
          >
            <div className="d-flex flex-column gap-3">
              <div className="border-bottom pb-3 mb-3">
                <h4 className="fw-medium text-dark mb-2">
                  Can I return a gift?
                </h4>
                <p className="text-secondary">
                  Yes, gifts can be returned with a gift receipt or proof of
                  purchase. Refunds for gifts will be issued as store credit or
                  gift cards.
                </p>
              </div>

              <div className="border-bottom pb-3 mb-3">
                <h4 className="fw-medium text-dark mb-2">
                  What if my item is damaged or defective?
                </h4>
                <p className="text-secondary">
                  Please contact us immediately if you receive a damaged or
                  defective item. We will arrange for a return shipping label
                  and process a replacement or refund as soon as possible.
                </p>
              </div>

              <div className="border-bottom pb-3 mb-3">
                <h4 className="fw-medium text-dark mb-2">
                  Can I cancel my order?
                </h4>
                <p className="text-secondary">
                  Orders can be canceled within 24 hours of placement if they
                  have not yet been shipped. Please contact our customer service
                  team immediately if you wish to cancel an order.
                </p>
              </div>

              <div className="border-bottom pb-3 mb-3">
                <h4 className="fw-medium text-dark mb-2">
                  What about sale or clearance items?
                </h4>
                <p className="text-secondary">
                  Items purchased on sale or clearance may have different return
                  policies, which will be clearly indicated at the time of
                  purchase. Generally, final sale items cannot be returned.
                </p>
              </div>

              <div>
                <h4 className="fw-medium text-dark mb-2">
                  How do I initiate a return?
                </h4>
                <p className="text-secondary">
                  To initiate a return, please contact our customer service team
                  through our website, email, or phone. You will need to provide
                  your order number and details about the item(s) you wish to
                  return.
                </p>
              </div>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <div className=" p-4 rounded-4xl refund mt-4">
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

export default RefundPolicy;
