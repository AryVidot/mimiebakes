import React from "react";

import Heading from "./Heading";
import Social from "./Social";
import Content from "./Content";
import Logo from "./Logo";
import Home from "./Home";
import TagLine from "./TagLine";
import Meet from "./Meet";
const Main = (props) => {
  return (
    <div>
      <Content>
        <Heading />
        <Social />
        <Logo />
        <Home />
        <TagLine />
        <Meet />
      </Content>
    </div>
  );
};

export default Main;
