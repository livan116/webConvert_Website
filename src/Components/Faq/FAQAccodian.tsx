import React from "react";
import { Accordion } from "react-bootstrap";

const questionsAndAnswers = [
  {
    eventKey: "0",
    question: "How does SEO differ from PPC?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "1",
    question: "What is local SEO and who needs it?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "2",
    question: "How does voice search impact SEO?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "3",
    question: "What is SEO and why is it important?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "4",
    question: "What are the key components of a successful SEO strategy?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "5",
    question: "How can I measure the success of my digital marketing efforts?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
  {
    eventKey: "6",
    question: "What are some common SEO mistakes to avoid?",
    answer: `Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.`,
  },
];

const FAQAccodian: React.FC = () => {
  return (
    <div className="choose-section-area sp8" style={{ background: "none" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 m-auto">
          <div className="testimonia4-header text-center blog-hedaer-area heading2 text-center" >
        <h1 className="text-anime-style-1 fs-1 mb-4" > FAQ's </h1>
        </div>
            <div className="accordian-tabs-area" style={{ padding: 0 }}>
              <Accordion flush id="accordionFlushExample" defaultActiveKey="0">
                {questionsAndAnswers.map(({ eventKey, question, answer }) => (
                  <React.Fragment key={eventKey}>
                    <Accordion.Item eventKey={eventKey}>
                      <Accordion.Header>{question}</Accordion.Header>
                      <Accordion.Body className="body2">
                        {answer}
                      </Accordion.Body>
                    </Accordion.Item>
                    <div className="space24"></div>
                  </React.Fragment>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccodian;
