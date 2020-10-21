import React from "react";
import { Row, ListGroup, Col } from "react-bootstrap";
import "./Topupstyle.css";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { TopupUser } from "../redux/actions/Topup";

const Content = (props) => {

  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.Topup)
  const Auth = useSelector((s) => s.Auth)

  React.useEffect(() => {
    dispatch(TopupUser({
      token : Auth.data.token
    }))
  },[]);

  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <div className="bg-white border-box bg-root">
          <Row>
            <div className="s-search">
              <p className="s-parap-search">How To Top Up</p>
            </div>
          </Row>
          {data.map((item, index) => {
              return (
                <ListGroup className="des-topup-top">
                  <ListGroup.Item className="des-topup">
                    <span className="num-topup">{index + 1} </span>
                    {item.description}
                    
                  </ListGroup.Item>
                </ListGroup>
              );
             })}
        </div>
      </Col>
    </>
  );
};

const Topup = (props) => {
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

export default Topup;
