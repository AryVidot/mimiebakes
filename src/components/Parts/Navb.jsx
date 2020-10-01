import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.scss";
import { withRouter } from "react-router-dom";

function Navb() {
  return (
    <section>
      <Navbar
        className="menu-toggle menu-b "
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="#home">Mimie Bakes.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-right ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <hr></hr>
    </section>
  );
}

export default withRouter(Navb);
