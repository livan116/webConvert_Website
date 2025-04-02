import React from "react";
import { Link } from "react-router-dom";

interface ComparisonData {
  feature: string;
  basicPlan: string | JSX.Element;
  standardPlan: string | JSX.Element;
  premiumPlan: string | JSX.Element;
}

const comparisonData: ComparisonData[] = [
  // Key Words Optimized
  {
    feature: "Key Words Optimized",
    basicPlan: "20 Keywords",
    standardPlan: "40 Keywords",
    premiumPlan: "80 Keywords",
  },

  // Top 10 Rankings Guarantee
  {
    feature: "Top 10 Rankings Guarantee",
    basicPlan: "5",
    standardPlan: "10",
    premiumPlan: "20",
  },

  // Weekly Reporting
  {
    feature: "Weekly Reporting",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Support
  {
    feature: "Support",
    basicPlan: "Email, Chat & Phone",
    standardPlan: "Email, Chat & Phone",
    premiumPlan: "Email, Chat & Phone",
  },

  // Customized Presentation
  {
    feature: "Customized Presentation",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // On-Page Optimization
  {
    feature: "On-Page Optimization",
    basicPlan: <span></span>,
    standardPlan: <span></span>,
    premiumPlan: <span></span>,
  },

  // Website Analysis
  {
    feature: "Website Analysis",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Competitor Analysis
  {
    feature: "Competitor Analysis",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Keyword Research
  {
    feature: "Keyword Research",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Structure Optimization
  {
    feature: "Structure Optimization",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Content Optimization
  {
    feature: "Content Optimization",
    basicPlan: "20 Pages",
    standardPlan: "40 Pages",
    premiumPlan: "80 Pages",
  },

  // Google Analytics Installation
  {
    feature: "Google Analytics Installation",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Google Webmaster Tools Account
  {
    feature: "Google Webmaster Tools Account",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Off-Page Optimization
  {
    feature: "Off-Page Optimization",
    basicPlan: <span></span>,
    standardPlan: <span></span>,
    premiumPlan: <span></span>,
  },

  // Web 2.0 Link Creation
  {
    feature: "Web 2.0 Link Creation",
    basicPlan: "15",
    standardPlan: "25",
    premiumPlan: "40",
  },

  // Article Writing
  {
    feature: "Article Writing",
    basicPlan: "4",
    standardPlan: "6",
    premiumPlan: "10",
  },

  // YouTube Video Creation
  {
    feature: "YouTube Video Creation",
    basicPlan: "2",
    standardPlan: "5",
    premiumPlan: "10",
  },

  // YouTube Video Promotion
  {
    feature: "YouTube Video Promotion",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Links From Social Media
  {
    feature: "Links From Social Media",
    basicPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    standardPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
    premiumPlan: <img src="../assets/img/icons/check4.svg" alt="" />,
  },

  // Free Blog Creation
  {
    feature: "Free Blog Creation",
    basicPlan: "5",
    standardPlan: "10",
    premiumPlan: "20",
  },

  // Profile Page Creation
  {
    feature: "Profile Page Creation",
    basicPlan: "10",
    standardPlan: "20",
    premiumPlan: "30",
  },
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="compare-table-area sp10">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading2 text-center">
              <h5>Compare Plan</h5>
              <h2>Compare Plan Suitable for Your Business</h2>
            </div>
            <div className="space60 d-lg-block d-none"></div>
            <div className="space30 d-lg-none d-block"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="comparison">
              <table className="table table-bordered">
                <thead>
                  <tr className="table-header">
                    <th className="price-info features">
                      <div className="price-now text-start">
                        <span className="text-start">Key Features</span>
                      </div>
                    </th>
                    <th className="price-info">
                      <div className="price-now">
                        <span>Basic Plan</span>
                      </div>
                    </th>
                    <th className="price-info standard">
                      <div className="price-now">
                        <span>Standard Plan</span>
                      </div>
                    </th>
                    <th className="price-info">
                      <div className="price-now">
                        <span>Premium Plan</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{row.feature}</td>
                        <td>{row.basicPlan}</td>
                        <td className="standard">{row.standardPlan}</td>
                        <td>{row.premiumPlan}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                  <tr className="compare-footer">
                    <td className="none-border"></td>
                    <td>
                      <Link to="/pricing" className="header-btn1">
                        $999/ Month
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </td>
                    <td className="standard">
                      <Link to="/pricing" className="header-btn1">
                        $1999/ Month
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </td>
                    <td>
                      <Link to="/pricing" className="header-btn1">
                        $2999/ Month
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
