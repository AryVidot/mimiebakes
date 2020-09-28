import React from "react";
import "./hero.scss";
const Hero = () => {
  return (
    <section className="wrapper">
      <div className="item item1"></div>
      <div className="item item2">
        {" "}
        <h2>
          Bespoke Cakes <br></br>For <br></br>All Occasions
        </h2>{" "}
        <a href="#pricing">
          <span>Order Here</span>
        </a>
      </div>
      <div className="item item3"></div>
    </section>
  );
};

export default Hero;
