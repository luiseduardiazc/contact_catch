import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";
import logo from "../img/logo3.png";
function Header() {
  return (
    <Navbar  expand="lg" fixed="top" className="navbar">
      <Navbar.Brand href="#home"><img id="logo" src={logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#home" className="links">Home</Nav.Link>
          <Nav.Link href="#about" className="links">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
