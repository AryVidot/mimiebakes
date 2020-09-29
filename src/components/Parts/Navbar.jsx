import React from "react";
import "./navbar.scss";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky-top bg-white " id="sticky">
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
      {/* Nav Toggle below */}
      <hr></hr>
    </div>
  );
}

export default withRouter(Navbar);
