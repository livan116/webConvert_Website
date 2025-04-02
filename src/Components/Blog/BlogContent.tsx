import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ReplyForm from "./ReplyForm";

const tags = [
  "PPC Advertising",
  "SEO",
  "Digital Marketing",
];

const socialLinks = [
  { src: "../assets/img/icons/facebook.svg", alt: "Facebook" },
  { src: "../assets/img/icons/instagram.svg", alt: "Instagram" },
  { src: "../assets/img/icons/linkedin.svg", alt: "LinkedIn" },
];

const BlogContent: React.FC = () => (
  <Col lg={8} className="mx-auto">
    <div className="blog-author-sidebar-area heading2">
      <div className="tags-area">
        <ul>
          <li>
            <Link to="#">
              <img src="../assets/img/icons/contact1.svg" alt="Author" /> Ben
              Stokes
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="../assets/img/icons/calender1.svg" alt="Date" /> 16
              August 2023
            </Link>
          </li>
        </ul>
      </div>
      <h2>
        The Power Of PPC Advertising: <br className="d-lg-block d-none" /> How
        To Maximize Your ROI
      </h2>
      <div className="space34"></div>
      <div className="img1">
        <img src="../assets/img/all-images/blog-img23.png" alt="Blog" />
      </div>
      <div className="space24"></div>
      <p>
        Pay-per-click (PPC) advertising is a powerful tool for driving targeted
        traffic to your website, generating leads, and increasing sales. When
        implemented effectively, PPC campaigns can deliver a high return on
        investment (ROI) and help you achieve your business goals. This guide,
        we'll explore the key components of successful PPC advertising and share
        strategies for maximizing your ROI.
      </p>
      <div className="space50"></div>
      <h3>Understanding PPC Advertising</h3>
      <div className="space24"></div>
      <p>
        PPC advertising is a digital marketing strategy in which advertisers pay
        a fee each time their ad is clicked. These ads are displayed on search
        engine results pages (such as Google or Bing) or on websites and social
        media platforms (such as Facebook or LinkedIn). The goal of PPC
        advertising is to attract qualified traffic to your website and convert
        them into customers or leads.
      </p>
      <div className="space50"></div>
      <h3>Key Components of Successful PPC Campaign</h3>
      {keyComponents.map((item, index) => (
        <div className="right-area" key={index}>
          <div className="check1">
            <img src="../assets/img/icons/check4.svg" alt="Check" />
          </div>
          <div className="content">
            <p>
              <span>{item.title}:</span> {item.description}
            </p>
          </div>
        </div>
      ))}
      <div className="space50"></div>
      <div className="img1">
        <img src="../assets/img/all-images/blog-img20.png" alt="Blog" />
      </div>
      <div className="space50"></div>
      <h3>Strategies for Maximizing PPC ROI</h3>
      {strategies.map((item, index) => (
        <div className="right-area" key={index}>
          <div className="check1">
            <img src="../assets/img/icons/check4.svg" alt="Check" />
          </div>
          <div className="content">
            <p><span>{item.title}:</span> {item.description}</p>
          </div>
        </div>
      ))}
      <div className="space50"></div>
      <div className="pera-box">
        <p>"PPC advertising is like a well-tuned engine: with the right fuel, maintenance, and strategy, it can propel your business forward at unprecedented speeds."</p>
        <div className="space16"></div>
        <Link to="#"><img src="../assets/img/icons/instagram.svg" alt="Instagram" /></Link>
      </div>
      <div className="space50"></div>
      <h3>Hire a Team of Expert Marketers to Handle the Research and Video Creation Process For You</h3>
      <div className="space24"></div>
      <p className="pera1">Just because something worked for one type of video doesn’t mean it will always work. Your video marketing strategy needs to be flexible and adjust to people’s viewing behaviors for maximum impact.</p>
      <div className="social-tags">
        <div className="tags">
          <h4>Tags:</h4>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}><Link to="#">{tag}</Link></li>
            ))}
          </ul>
        </div>
        <div className="social">
          <h4>Social:</h4>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}><Link to="#"><img src={link.src} alt={link.alt} /></Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space50"></div>
      <h3>Blog Comments (2)</h3>
      <div className="space32"></div>
      <div className="comments-boxarea">
        <div className="comments-boxes">
          <div className="comments-author-box">
            <div className="img3">
              <img src="../assets/img/all-images/comments-img1.png" alt="Commenter" />
            </div>
            <div className="content">
              <Link to="#" className="name">Mr. Ana Ritchie</Link>
              <Link to="#" className="date">12 May 2024</Link>
            </div>
          </div>
          <Link to="#" className="reply">Reply</Link>
        </div>
        <div className="space16"></div>
        <p>"This is a fantastic guide on PPC advertising! I've been struggling to get good ROI with my campaigns, but your tips on keyword research and ad copywriting have given me some great ideas to try. Thanks for sharing such valuable information!"</p>
      </div>
      <div className="space30"></div>
      <div className="comments-boxarea box2">
        <div className="comments-boxes">
          <div className="comments-author-box">
            <div className="img3">
              <img src="../assets/img/all-images/comments-img2.png" alt="Commenter" />
            </div>
            <div className="content">
              <Link to="#" className="name">Matthew Kuhnemann</Link>
              <Link to="#" className="date">12 May 2024</Link>
            </div>
          </div>
          <Link to="#" className="reply">Reply</Link>
        </div>
        <div className="space16"></div>
        <p>"Great article! I especially appreciate the section on ad extensions. I've been neglecting them in my campaigns, but now I see how they can really enhance the visibility and effectiveness of my ads. Time to make some changes!"</p>
      </div>
      <div className="space50"></div>
      <ReplyForm />
    </div>
  </Col>
);

const keyComponents = [
  {
    title: "Keyword Research",
    description:
      "Conduct thorough keyword research to identify relevant search terms and phrases that your target audience is using. Choose keywords with high search volume, low competition, and strong buyer intent to maximize your chances of success.",
  },
  {
    title: "Ad Copywriting",
    description:
      "Write compelling ad copy that grabs attention, highlights your unique selling proposition (USP), and encourages users to click. Use relevant keywords in your ad copy to improve ad relevance and quality score.",
  },
  {
    title: "Ad Targeting",
    description:
      "Use advanced targeting options to reach your ideal audience. Target users based on demographics, interests, location, device, and more to ensure that your ads are shown to the right people at the right time.",
  },
  {
    title: "Ad Extension",
    description:
      "Take advantage of ad extensions to provide additional information and increase ad visibility. Use extensions such as sitelinks, callouts, and structured snippets to enhance your ads and drive more clicks.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Create dedicated landing pages that are tailored to your PPC campaigns. Optimize your landing pages for relevance, usability, and conversion to ensure a seamless user experience and maximize your ROI.",
  },
];

const strategies = [
  {
    title: "Set Clear Goals",
    description:
      "Define clear objectives for your PPC campaigns, whether it's increasing website traffic, generating leads, or driving sales. Align your campaign strategy with your business goals to ensure that you're focusing on the metrics that matter most.",
  },
  {
    title: "Monitor Performance Metrics",
    description:
      "Track key performance metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), and ROI. Use analytics tools like Google Analytics and Google Ads to monitor campaign performance and identify areas for improvement.",
  },
  {
    title: "Optimize Ad Copy & Keywords",
    description:
      "Continuously test and optimize your ad copy and keywords to improve ad relevance and click-through rates. Experiment with different messaging, offers, and calls to action to see what resonates best with your audience.",
  },
  {
    title: "Refine Targeting Options",
    description:
      "Refine your targeting options based on performance data and audience insights. Adjust your targeting parameters to focus on high-value segments and exclude irrelevant audiences to improve campaign efficiency.",
  },
  {
    title: "Implement Bid Strategies",
    description:
      "Create dedicated landing pages that are tailored to your PPC campaigns. Optimize your landing pages for relevance, usability, and conversion to ensure a seamless user experience and maximize your ROI.",
  },
];

export default BlogContent;
