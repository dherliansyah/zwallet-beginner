import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import "./style.css";
import bell from "./asset/bell.svg";
import Rectangle25 from "./asset/Rectangle25.png";

const Header = (props) => {
  return (
    <>
      <Navbar className="background-header">
        <Container>
          <Navbar.Brand className="header-logo">
            Zwallet
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image className="logo" src={Rectangle25} rounded />
            <Navbar.Text className="text-header">
              <p className="parap-header">Robert Chandler</p>
              <p className="parap-header">+62 8139 3877 7946</p>
            </Navbar.Text>
            <Image src={bell} rounded />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;
