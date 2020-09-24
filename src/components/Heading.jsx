import React from "react";

function Heading() {
  return (
    <div class="sticky-top bg-white" id="sticky">
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
      {/* Nav Toggle below */}

      <hr></hr>
    </div>
  );
}

export default Heading;
