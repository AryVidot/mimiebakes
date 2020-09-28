import React from "react";
import Heading from "../Parts/Heading";
import Footer from "../Footer";
const About = () => {
  return (
    <div>
      <Heading />
      <div className="about" id="about">
        <h2>About Me</h2>
        <hr></hr>
        <h3>Mimie Hollist - Home Baker</h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;
