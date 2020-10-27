import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import "./style.css";
import bell from "./asset/bell.svg";
import Rectangle25 from "./asset/Rectangle25.png";
import { GetUsers } from "../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const {data} = useSelector((s) => s.Users)
  const Auth = useSelector((s) => s.Auth) 

  React.useEffect(() => {
    // console.log(data)
    dispatch(GetUsers({
      idUser: Auth.data.idUser, 
      token: Auth.data.token

    }))

    // console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  },[])
  return (
    <>
      <Navbar className="background-header">
        <Container>
          <Navbar.Brand className="header-logo">
            Zwallet
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image className="logo" src={data.photo ? data.photo : Rectangle25} rounded />
            <Navbar.Text className="text-header">
              <p className="parap-header">
              {
                  data.firstName
                 }
              </p>
              <p className="parap-header">+62 &nbsp;
              {
                  data.phone
                 }
              </p>

            </Navbar.Text>
            <Image src={bell} rounded />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;
