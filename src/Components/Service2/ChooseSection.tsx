import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

const ChooseSection: React.FC = () => {
  return (
    <div className="choose-section-area sp1">
      <img src="../assets/img/bg/cta-bg1.png" alt="Background 1" className="cta-bg1 aniamtion-key-2" />
      <img src="../assets/img/bg/cta-bg2.png" alt="Background 2" className="cta-bg2 aniamtion-key-1" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="choose-header-area text-center heading2">
              <h5>Why Choose Us</h5>
              <h2>Why Choose SEOC For SEO?</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="accordian-tabs-area">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      1. Customized Strategies
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We believe in transparency and provide regular updates and detailed reports on your campaign's progress.
                    </div>
                    <div className="space10"></div>
                    <div className="accordion-body body2">
                      Ready to boost your online presence and drive more organic traffic to your website.
                    </div>
                  </div>
                </div>
                <div className="space24"></div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      2. Transparent Reporting
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We believe in transparency and provide regular updates and detailed reports on your campaign's progress.
                    </div>
                    <div className="space10"></div>
                    <div className="accordion-body body2">
                      Ready to boost your online presence and drive more organic traffic to your website.
                    </div>
                  </div>
                </div>
                <div className="space24"></div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      3. Proven Results
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We believe in transparency and provide regular updates and detailed reports on your campaign's progress.
                    </div>
                    <div className="space10"></div>
                    <div className="accordion-body body2">
                      Ready to boost your online presence and drive more organic traffic to your website.
                    </div>
                  </div>
                </div>
                <div className="space24"></div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      4. Expert Team
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We believe in transparency and provide regular updates and detailed reports on your campaign's progress.
                    </div>
                    <div className="space10"></div>
                    <div className="accordion-body body2">
                      Ready to boost your online presence and drive more organic traffic to your website.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-all-images-area">
              <img src="../assets/img/elements/elements14.png" alt="Elements 14" className="elements12 keyframe5" />
              <img src="../assets/img/elements/elements15.png" alt="Elements 15" className="elements13 keyframe5" />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1">
                    <div className="space100"></div>
                    <img src="../assets/img/all-images/service-img5.png" alt="Service 5" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img2">
                    <img src="../assets/img/all-images/service-img9.png" alt="Service 9" />
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

export default ChooseSection;
