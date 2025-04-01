import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    imgSrc: 'assets/img/all-images/case-img1.png',
    title: 'Website Design & Development',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 2,
    imgSrc: 'assets/img/all-images/case-img2.png',
    title: 'SEO',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 3,
    imgSrc: 'assets/img/all-images/case-img3.png',
    title: 'PPC Advertising',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 4,
    imgSrc: 'assets/img/all-images/case-img4.png',
    title: 'Social Media Marketing',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 5,
    imgSrc: 'assets/img/all-images/case-img5.png',
    title: 'Content Marketing',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 6,
    imgSrc: 'assets/img/all-images/case-img6.png',
    title: 'Email Marketing',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
  {
    id: 7,
    imgSrc: 'assets/img/all-images/case-img7.png',
    title: 'Analytics & Reporting',
    description: 'We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.',
    link: '/case-single',
  },
];

const CaseStudySection: React.FC = () => {
  return (
    <div className="case1-section-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-4">
            <div className="case-header-area">
              <h5>Case Study</h5>
              <h2 className="text-anime-style-3">SEOC Case Study</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {caseStudies.map(study => (
            <div className="col-lg-4 col-md-6 mb-4" key={study.id}>
              <div className="cs_case_study cs_style_1 cs_hover_active">
                <Link to={study.link} className="cs_case_study_thumb cs_bg_filed">
                  <img src={study.imgSrc} alt={study.title} className="img-fluid" />
                </Link>
                <div className="content-area1">
                  <Link to={study.link}>{study.title}</Link>
                </div>
                <div className="content-area">
                  <Link to={study.link}>{study.title}</Link>
                  <p>{study.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
