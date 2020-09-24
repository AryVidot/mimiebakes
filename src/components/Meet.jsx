import React from "react";
import "./meet.scss";
const Meet = () => {
  return (
    <section className="meet">
      <div className="meet__item about">
        <a href="#about">
          <span>Meet Mimie</span>
        </a>{" "}
      </div>
      <div className="meet__item contact">
        <a href="#contact">
          <span>Contact Me</span>
        </a>
      </div>
    </section>
  );
};

export default Meet;
