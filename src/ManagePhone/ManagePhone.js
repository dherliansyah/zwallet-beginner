import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./ManagePhonestyle.css";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";

const Content = (props) => {
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="bg-white border-box bg-root manage-back">
              <p className="top-manage">Add Phone Number</p>
              <p className="bottom-manage">
                Add at least one phone number for the transfer
              </p>
              <p className="bottom-manage">
                ID so you can start transfering your money to
              </p>
              <p className="bottom-manage">another user.</p>

              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  className="top-form-phone"
                >
                  <span>+62</span>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    className="form-phone"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="button-phone"
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

const ManagePhone = (props) => {
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

export default ManagePhone;
