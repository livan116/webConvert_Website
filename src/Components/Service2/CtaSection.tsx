import { Link } from "react-router-dom";

const CtaSectionService2: React.FC = () => {
  return (
    <div className="cta-section-area others-cta">
      <img
        src="../assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="../assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              <h2>Competitor Analysis</h2>
              <p>
                Find the keywords your competitors rank for and analyze their
                <br className="d-lg-block d-none" />
                data insights to uncover their SEO strategy in one click
              </p>
              <div className="space32"></div>
              <div className="form-area">
                <form>
                  <div className="input-area">
                    <span>
                      <i className="fa-solid fa-link"></i>
                    </span>
                    <input type="text" placeholder="https://yoursite.com" />
                  </div>
                  <div className="input-area">
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <input type="text" placeholder="youremail@domain.com" />
                  </div>
                  <div className="btn-area">
                    <Link to="/" className="header-btn1">
                      Analyze Now{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
              <ul>
                <li>Try:</li>
                <li>
                  <Link to="/">Marketing</Link>
                </li>
                <li>
                  <Link to="/">Laptop</Link>
                </li>
                <li>
                  <Link to="/">iPhone</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSectionService2;
