import React from "react";
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

const Footer = (props) => {
  return (
    <>
      <footer className="footer-box">
        <Container>
          <Row>
            <Col lg="12">
              <Row>
                <Col lg="6">
                  <div className="footer-left">
                    <div className="footer-bottom">
                      <p className="parap-footer">
                        2020 Zwallet. All right reserved.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="footer-right">
                    <Row>
                      <Col lg="6">
                        <div className="footer-bottom">
                          <p className="parap-footer parap-footer-mobile">
                            +62 5637 8882 9901
                          </p>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="footer-bottom">
                          <p className="parap-footer parap-footer-mobile">
                            contact@zwallet.com
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
