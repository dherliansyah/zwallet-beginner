import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Successstyle.css";
import success from "./asset/success.svg";
import Retangle25 from "./asset/Rectangle25.png";
import share from "./asset/share-2.svg";
import download from "./asset/download.svg";

const Success = (props) => {
  return (
    <>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="bg-white border-box bg-root">
            <Image className="img-success" src={success} rounded />
            <p className="des-success">Transfer Success</p>
            <ListGroup className="des-personal">
              <ListGroup.Item className="description">
                <p className="data-success-top"> Amount</p>
                <p className="data-success">Rp 100.000</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="des-personal">
              <ListGroup.Item className="description">
                <p className="data-success-top"> Balance Left</p>
                <p className="data-success">Rp 200.000</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="des-personal">
              <ListGroup.Item className="description">
                <p className="data-success-top"> Date & Time</p>
                <p className="data-success">May 11, 2020 - 12.20</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="des-personal">
              <ListGroup.Item className="description">
                <p className="data-success-top"> Notes</p>
                <p className="data-success">For buying some socks</p>
              </ListGroup.Item>
            </ListGroup>
            <p className="bottom-success">Transfer To</p>
            <ListGroup className="des-personal">
              <ListGroup.Item className="description">
                <Image
                  className="img-success-bottom"
                  src={Retangle25}
                  rounded
                />
                <p className="data-success">Samuel Suhi</p>
                <p className="data-success-top"> +62 813-8492-9994</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item className="description">
                <Link to="" className="download">
                  <span className=" img-sharee">Back to Home</span>
                </Link>
                <Link to="" className="download">
                  <span className=" img-share">Download PDF</span>
                </Link>
                <Link to="" className="downloadd download">
                <Image src={share} rounded />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Success;
