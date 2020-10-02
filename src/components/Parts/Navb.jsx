import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.scss";
import { withRouter, Link } from "react-router-dom";

// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import Pricing from "../Pages/Pricing";
// import Contact from "../Pages/Contact";

function Navb() {
  return (
    <section>
      <div>
        <Navbar
          className="menu-toggle menu-b "
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand href="#home">Mimie Bakes.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav justify-content-right">
            <Nav className="mr-auto  ">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div> */}
      <hr></hr>
    </section>
  );
}

export default withRouter(Navb);
