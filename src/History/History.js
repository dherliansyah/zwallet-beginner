import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Historystyle.css";
import john from "./asset/john.png";
import Axios from "axios";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";

const Content = (props) => {
  const [transfer, setTransfer] = React.useState("");
  React.useEffect(() => {
    Axios({
      method: "get",
      url: "https://zwallet-apii.herokuapp.com/transfer",
    })
      .then((res) => setTransfer(res.data.data))
      .catch((err) => console.log("err. message"));
  }, []);
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className="bg-white border-box bg-root">
                <div className="h-tran-parap">
                  <p className="h-tran-top">Transaction History</p>
                </div>

                <div className="h-tran">
                  <p className="h-tran-mid">This Week</p>
                </div>

                {transfer &&
                  transfer.map((item) => {
                    return (
                      <div className="h-tran-data">
                        <img
                          className="h-img-data img-fluid"
                          alt="profile img"
                          src={john}
                        />
                        <div className="h-status-money2">
                          <p className="h-money.data1">{item.amount}</p>
                        </div>
                        <p className="h-name-data">
                          {item.firstName} {item.lastName}
                        </p>
                        <p className="h-status-data">Transfer</p>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

const History = (props) => {
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

export default History;
