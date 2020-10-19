import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./ChangePinstyle.css";
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
              <p className="top-change">Change Pin</p>
              <p className="isi-change">
                Enter your current 6 digits Zwallet PIN below to
              </p>
              <p className="isi-change">continue to the next steps.</p>
              <Form>
                <Form.Group controlId="formBasicEmail" className="float-change">
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                  <Form.Control
                    className="input-change"
                    type="text"
                    placeholder="__"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="button-pin">
                  Continue
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const ChangePin = (props) => {
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

export default ChangePin;
