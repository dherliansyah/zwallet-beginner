import React from "react";
import { Container, Row, ListGroup } from "react-bootstrap";
import "./Topupstyle.css";
import Axios from "axios";

const Topup = (props) => {
  const [topup, setTopup] = React.useState("");
  React.useEffect(()=>{
    Axios({
      method : 'get',
      url : 'https://zwallet-apii.herokuapp.com/topup',
    })
      .then((res)=> setTopup(res.data.data))
      .catch((err)=> console.log(err.message))
  },[]);

  return (
    <>
      <Container>
        <Row>
          <div className="s-search">
            <p className="s-parap-search">How To Top Up</p>
          </div>
        </Row>
        {topup && topup.map((item, index)=>{
          return(
                  <ListGroup className="des-topup-top">
                  <ListGroup.Item className="des-topup">
                    <span className="num-topup"> {index+1}
                    </span>{item.description}
                  </ListGroup.Item>
                </ListGroup>
          );
        })}
      </Container>
    </>
  );
};

export default Topup;
