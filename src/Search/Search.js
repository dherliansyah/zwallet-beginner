import React from "react";
import { Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Searchstyle.css";
import john from "./asset/john.png";
import Axios from "axios";

const Search = (props) => {
  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    Axios({
      method: "get",
      url: "http://localhost:8000/api/v1/user?page=1&limit=4",
    })
      .then((res) => setUser(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
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
        {user &&
          user.map((item) => {
            return (
              <div className="h-tran-data-search">
                <img
                  className="h-img-data-search img-fluid"
                  alt="profile img"
                  src={john}
                />
                <Link className="h-name-data-href" to="/amount">
                  <p className="h-name-data-search">
                    {item.firstName} {item.lastName}{" "}
                  </p>
                </Link>
                <p className="h-status-data-search">{`+62 ${item.phone}`}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Search;
