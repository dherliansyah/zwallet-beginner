import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Historystyle.css";
import john from "./asset/john.png";
import audesk from "./asset/audesk.png";
import logo from "./asset/logo.png";
import name from "./asset/name.png";
import Axios from "axios";

const History = (props) => {
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
      <Container>
        <Row>
          <Col lg={12} md={12}>
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

            {/* <div className="h-tran-data">
              <img
                className="h-img-data img-fluid"
                alt="profile img"
                src={logo}
              />
              <div className="h-status-money2">
                <p className="h-money.data2">-Rp.149.000</p>
              </div>
              <p className="h-name-data">Samuel Suhi</p>
              <p className="h-status-data">Transfer</p>
            </div>
            <div className="h-tran">
              <p className="h-tran-month">This Month</p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History;
