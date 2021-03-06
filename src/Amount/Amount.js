import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import john from "./asset/john.png";
import "./Amountstyle.css";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";

const Content = (props) => {
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <div className="bg-white border-box bg-root">
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="s-search">
                <p className="s-parap-search">Transfer Money</p>
              </div>
              <div className="h-tran-data-search">
                <img
                  className="h-img-data-search img-fluid"
                  alt="profile img"
                  src={john}
                />
                <p className="h-name-data-search">Samuel Suhi</p>
                <p className="h-status-data-search">+62 813-8492-9994</p>
              </div>
              <p className="type-parap">
                Type the amount you want to transfer and then
              </p>
              <p className="type-parap-one">
                press continue to the next steps.
              </p>
              <Form action="/confirmation">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="0.00"
                    className="amount-input"
                  />
                  <Form.Text className="text-muted amount-available">
                    Rp. 120.000 Available
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Add some notes"
                    className="amount-notes"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  className="h-tran-data-confirm"
                  type="submit"
                >
                  Continue
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

const Amount = (props) => {
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

export default Amount;
