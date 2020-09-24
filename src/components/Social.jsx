import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Social = () => {
  return (
    <section className="social">
      <p className="social__item">
        <a href="https://www.instagram.com/mimiehollist/">
          {" "}
          <FaInstagram />
        </a>
      </p>
      <p className="social__item">
        <a href="#">
          {" "}
          <FaFacebook />
        </a>
      </p>
    </section>
  );
};

export default Social;
