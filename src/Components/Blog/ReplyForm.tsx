import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const ReplyForm: React.FC = () => {
  return (
    <div className="contact-form-area">
        {/*  */}
      <h4>Leave a Reply</h4>
      <div className="space16"></div>
      <p>
        Provide clear contact information, including phone number, email, and
        address.
      </p>
      <div className="space12"></div>
      <Row>
        <Col lg={6}>
          <div className="input-area">
            <input type="text" placeholder="First Name" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="input-area">
            <input type="text" placeholder="Last Name" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="input-area">
            <input type="email" placeholder="Email" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="input-area">
            <input type="number" placeholder="Phone" />
          </div>
        </Col>
        <Col lg={12}>
          <div className="input-area">
            <input type="text" placeholder="Subject" />
          </div>
        </Col>
        <Col lg={12}>
          <div className="input-area">
            <textarea placeholder="Message"></textarea>
          </div>
        </Col>
        <Col lg={12}>
          <div className="space24"></div>
          <div className="input-area">
            <Button type="submit" className="header-btn1">
              Submit{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ReplyForm;
