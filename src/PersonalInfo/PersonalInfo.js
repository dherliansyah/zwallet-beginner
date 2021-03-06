import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Personalstyle.css";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../redux/actions/Users";


const Content = (props) => {

  const dispatch = useDispatch();

  const {data} = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth)

  React.useEffect(() =>{
    dispatch(GetUsers({
      idUser : Auth.data.Users,
      Auth : Auth.data.token
    }))
  },[])


  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="bg-white border-box bg-root">
              <p className="text-p">Personal Information</p>
              <p className="isi-p">
                We got your personal information from the sign{" "}
              </p>
              <p className="isi-p">up proccess. If you want to make changes </p>
              <p className="isi-p">on your information, contact our support.</p>
              <ListGroup className="des-personal">
                <ListGroup.Item className="description">
                  <p className="data-personal-top"> First Name</p>
                  <p className="data-personal">{data.firstName}</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="des-personal">
                <ListGroup.Item className="description">
                  <p className="data-personal-top"> Last Name</p>
                  <p className="data-personal">{data.lastName}</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="des-personal">
                <ListGroup.Item className="description">
                  <p className="data-personal-top"> Verified E-mail</p>
                  <p className="data-personal">{data.email}</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="des-personal">
                <ListGroup.Item className="description">
                  <p className="data-personal-top"> Phone Number</p>
                  <p className="data-personal">+62 {data.phone}</p>
                  <Link className="text-manage" to="/manage_phone">
                    <p className="">Manage</p>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const PersonalInfo = (props) => {
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

export default PersonalInfo;
