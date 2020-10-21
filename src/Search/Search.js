import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Searchstyle.css";
import john from "./asset/john.png";
import { Navbar } from "../Component";
import { Footer } from "../Component";
import { Header } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { SearchUser } from "../redux/actions/Search";

const Content = (props) => {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.Search);
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {
    dispatch(SearchUser({
      token : Auth.data.token
    }))
     
  }, []);
  return (
    <>
      <Col lg={9} md={12} xs={12}>
        <div className="bg-white border-box bg-root">
          <Row>
            <div className="s-search">
              <p className="s-parap-search">Search Receiver</p>
            </div>
          </Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="form-radius"
                type="text"
                placeholder="Search receiver here"
              />
            </Form.Group>
          </Form>
          {data.map((item) => {
              return (
                <div className="h-tran-data-search">
                  <img
                    className="h-img-data-search img-fluid"
                    alt="profile img"
                    src={john}
                  />
                  <Link className="h-name-data-href" to="/amount">
                    <p className="h-name-data-search">
                      {item.firstName} {item.lastName}
                    </p>
                  </Link>
                  <p className="h-status-data-search">+62 {item.phone}</p>
                </div>
              );
            })}
        </div>
      </Col>
    </>
  );
};

const Search = (props) => {
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

export default Search;
