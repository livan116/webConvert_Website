import React from "react";
import StepSection from "./StepSection";

const stepsData = [
  {
    stepNumber: "Step 01",
    title: "Understand Your Audience",
    description:
      "Before diving into keyword research, it's essential to understand your target audience and their needs. Consider creating a buyer persona to outline key demographic information, pain points, preferences of your ideal customers.",
    buttonText: "Our Case Study",
    buttonLink: "/case",
    images: [
      "../assets/img/all-images/about-img6.png",
      "../assets/img/all-images/service-img5.png",
    ],
  },
  {
    stepNumber: "Step 02",
    title: "Expand Your Keyword List",
    description:
      "Use keyword research tools like Google Keyword Planner, SEMrush, or Ahrefs to expand your list of potential keywords. Enter your seed keywords into the tool and explore the suggested keyword ideas. Look for variations, synonyms, long-tail keywords, & related terms that your audience may be searching for.",
    buttonText: "Our Case Study",
    buttonLink: "/case",
    reverse: true,
    images: [
      "../assets/img/all-images/service-img6.png",
      "../assets/img/all-images/service-img7.png",
    ],
  },
  {
    stepNumber: "Step 03",
    title: "Evaluate Keyword Metrics",
    description:
      "Analyze keyword metrics such as search volume, competition, and relevance to determine which keywords are worth targeting. Focus on keywords with high search volume, low competition, and high relevance to your business. Pay attention to metrics like average monthly searches, keyword difficulty, and cost-per-click (CPC) if you're planning to use paid advertising.",
    buttonText: "Our Case Study",
    buttonLink: "/case",
    images: [
      "../assets/img/all-images/service-img8.png",
      "../assets/img/all-images/service-img9.png",
    ],
  },
];

const WorksSection = () => {
  return (
    <div className="works-inner-section-area sp1">
      <div className="container">
        {stepsData.map((step, index) => (
          <React.Fragment key={index}>
            <StepSection {...step} />
            {index < stepsData.length - 1 && (
              <>
                <div className="space100 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
