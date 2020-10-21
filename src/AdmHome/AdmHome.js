import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./Profilestyle.css";
// import profil from "./asset/Rectangle25.png";
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
              <Image className="img-profil" src="" rounded />
              <Link className="img-text" to="">
                <p>Edit</p>
              </Link>

              <p className="name-p">Robert Chandler</p>
              <p className="phone-p">+62 813-9387-7946</p>

              <div className="personal-info">
                <Link className="text-link" to="/personal_info">
                  <p className="text-personal">Personal Information</p>
                </Link>
              </div>

              <div className="password-info">
                <Link className="text-link" to="/change_password">
                  <p className="text-personal">Change Password</p>
                </Link>
              </div>

              <div className="pin-info">
                <Link className="text-link" to="/change_pin">
                  <p className="text-personal">Change Pin</p>
                </Link>
              </div>

              <div className="logout-info">
                <Link className="text-link" to="/change_phone">
                  <p className="text-personal">Logout</p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const AdmHome = (props) => {
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

export default AdmHome