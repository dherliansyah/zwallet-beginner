import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Passwordstyle.css";

const ChangePassword = (props) => {
  return (
    <>
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
                  type="password"
                  placeholder="Current password"
                  className="form-change"
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="top-form-change"
              >
                <Form.Control
                  type="password"
                  placeholder="New password"
                  className="form-change"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                className="top-form-change"
              >
                <Form.Control
                  type="password"
                  placeholder="Repeat new password"
                  className="form-change"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="button-change">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ChangePassword;
