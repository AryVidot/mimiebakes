import React, { Fragment } from "react";
import "./heading.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Heading() {
  return (
    <Router>
      <div className="sticky-top bg-white " id="sticky">
        <ul className="nav justify-content-center ">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        {/* Nav Toggle below */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <hr></hr>
      </div>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <Home />{" "}
  </Fragment>
);

const About = () => (
  <Fragment>
    <About />{" "}
  </Fragment>
);
const Pricing = () => (
  <Fragment>
    <Pricing />{" "}
  </Fragment>
);
const Contact = () => (
  <Fragment>
    <Contact />{" "}
  </Fragment>
);

export default Heading;
