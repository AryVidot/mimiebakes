import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.scss";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navb() {
  return (
    <section>
      <div className="menu-b sticky-top navbar-light bg-white " id="sticky">
        <ul className="nav justify-content-center ">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" className="nav-link">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* TOGGLE */}
      <Navbar
        className="menu-toggle"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">Mimie Bakes.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav class="menu-toggle navbar navbar-light bg-white">
        <Link class="navbar-brand" to="#">
          Mimie Bakes.
        </Link>
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#collapseNavbar2"
          // aria-controls="collapseNavbar"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon my-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsingNavbar2">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                Home <span className="nav-link">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* Nav Toggle below  */}
      <hr></hr>
    </section>
  );
}

export default withRouter(Navb);
