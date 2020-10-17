import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./ChangePinstyle.css";

const ChangePin = (props) => {
  return (
    <>
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
    </>
  );
};

export default ChangePin;
