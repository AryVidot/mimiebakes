import React from "react";

import Container from "../Container";
import Footer from "../Parts/Footer";
import "../../assests/styles/scss/contact.scss";
const Contact = (props) => {
  console.log(props);
  return (
    <Container>
      <div className="contact-wrapper">
        <div id="contact">
          <h2>Contact Me</h2>
          <hr className="hr-short"></hr>
          <h3> 01 2345 6789 - info@mimiebakes.com</h3>
        </div>
        <div className="contact contact__note">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quis.
            Laborum quasi molestias soluta similique! Autem nulla doloribus
            praesentium reiciendis animi atque facere,
          </p>
        </div>
        <div className="contact">
          <form>
            <p>
              <label>Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" id="" cols="10" rows="10"></textarea>
            </p>
            <button className="full" type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
