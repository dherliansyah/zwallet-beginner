import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Passwordstyle.css";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";

const Content = (props) => {
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="bg-white border-box bg-root">
              <p className="text-c"> Change Password</p>
              <p className="description">
                You must enter your current password and then
              </p>
              <p className="description">type your new password twice.</p>

              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  className="top-form-change"
                >
                  <Form.Control
                    type="text"
                    placeholder="Current password"
                    className="form-change"
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="top-form-change"
                >
                  <Form.Control
                    type="text"
                    placeholder="New password"
                    className="form-change"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formBasicPassword"
                  className="top-form-change"
                >
                  <Form.Control
                    type="text"
                    placeholder="Repeat new password"
                    className="form-change"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="button-change"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const ChangePassword = (props) => {
  return (
    <div className="bg-white">
      <Header />
      <section class="my-1 container">
        <div class="row">
          <Navbar {...props} />
          <Content />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChangePassword;
