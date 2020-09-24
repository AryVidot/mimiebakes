import React from "react";

function Heading() {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
}

export default Heading;
