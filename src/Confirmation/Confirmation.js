import React from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import "./Confirmationstyle.css";
import john from "./asset/john.png";

const Confirmation = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="bg-white border-box bg-root">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="s-search">
              <p className="s-parap-search">Transfer To</p>
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
            <div className="s-search">
              <p className="s-parap-search">Details</p>
            </div>
            <div className="h-tran-data-con">
              <p className="h-status-data-con">Amount</p>
              <p className="h-name-data-con">Rp. 100.000</p>
            </div>
            <div className="h-tran-data-con">
              <p className="h-status-data-con">Balance Left</p>
              <p className="h-name-data-con">Rp. 20.000</p>
            </div>
            <div className="h-tran-data-con">
              <p className="h-status-data-con">Date & Time</p>
              <p className="h-name-data-con">May 11, 2020 - 12.20</p>
            </div>
            <div className="h-tran-data-button">
              <Button
                className="btn btn-primary h-tran-data-confirm"
                variant="primary"
                onClick={handleShow}
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Confirmation;
