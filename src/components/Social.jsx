import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import "./social.scss";
const Social = () => {
  return (
    <section className="social">
      <div className="social__item">
        <a href="https://www.instagram.com/mimiehollist/" target="_blank">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/mimiehollist" target="_blank">
          {" "}
          <FaFacebook />
        </a>
      </div>
    </section>
  );
};

export default Social;
