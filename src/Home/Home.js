import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homestyle.css";
import arrowup from "./asset/arrowup.svg";
import plus from "./asset/plus.svg";
import arrow from "./asset/arrow.svg";
import arroowup from "./asset/arroowup.svg";
import john from "./asset/john.png";
import name from "./asset/name.png";
import logo from "./asset/logo.png";
import audesk from "./asset/audesk.png";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../redux/actions/Users";

const Content = (props) => {
  const dispatch = useDispatch();

  const {data} = useSelector((s) => s.Users)
  const Auth = useSelector((s) => s.Auth) 

  React.useEffect(() =>{
    dispatch(GetUsers({
      idUser: Auth.data.idUser, 
      token: Auth.data.token

    }))
  },[])
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <Container>
          <Row className="top-row">
            <Col lg={6} md={6} sm={6} xs={12}>
              <div>
                <div className=" aa">
                  <p className="balance-top">Balance</p>
                  <h3 className="money-top">Rp. {data.balance}</h3>
                  <p className="phone-top">+62 {data.phone}</p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="bg-button">
                <Link className="his-top-button" to="/search">
                  <img className="transfer" src={arrowup} alt="icon" />
                  Transfer
                </Link>
                <Link className="his-top-button" to="/topup">
                  <img className="topup" src={plus} alt="icon" />
                  Top Up
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={7} md={7} sm={12} xs={12} className="pl-0">
              <div className="his-middle-one">
                <div className="income">
                  <img src={arrow} alt="icon" />
                  <p className="parap-income">Income</p>
                  <p className="money-income">Rp.2.120.000</p>
                </div>
                <div className="expense">
                  <img src={arroowup} alt="icon" />
                  <p className="parap-income">Expense</p>
                  <p className="money-income">Rp.1.560.000</p>
                </div>
                <h1 class="comingsoon">ComingSoon</h1>
              </div>
            </Col>

            <Col lg={5} md={5} sm={12} xs={12} className="pl-0 pr-0">
              <div className="his-middle-two">
                <p className="transaction-his">Transaction History</p>
                <Link className="see-all" to="/history">
                  See all
                </Link>
                <div className="h-tran-data">
                  <img
                    className="h-img-data img-fluid"
                    alt="profile img"
                    src={john}
                  />
                  <div className="h-status-money3">
                    <p className="h-money.data1">+Rp 50.000</p>
                  </div>
                  <p className="h-name-data">Samuel Suhi</p>
                  <p className="h-status-data">Transfer</p>
                </div>
                <div className="h-tran-data">
                  <img
                    className="h-img-data img-fluid"
                    alt="profile img"
                    src={logo}
                  />
                  <div className="h-status-money4">
                    <p className="h-money.data2">-Rp 149.000</p>
                  </div>
                  <p className="h-name-data">Netflix</p>
                  <p className="h-status-data">Subscription</p>
                </div>
                <div className="h-tran-data">
                  <img
                    className="h-img-data img-fluid"
                    alt="profile img"
                    src={name}
                  />
                  <div className="h-status-money3">
                    <p className="h-money.data1">+Rp 150.000</p>
                  </div>
                  <p className="h-name-data">Christine Mar...</p>
                  <p className="h-status-data">Transfer</p>
                </div>
                <div className="h-tran-data">
                  <img
                    className="h-img-data img-fluid"
                    alt="profile img"
                    src={audesk}
                  />
                  <div className="h-status-money4">
                    <p className="h-money.data2">-Rp 249.000</p>
                  </div>
                  <p className="h-name-data">Adobe Inc.</p>
                  <p className="h-status-data">Subscription</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

const Home = (props) => {
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

export default Home;
