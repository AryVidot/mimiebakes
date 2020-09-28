import React from "react";

import Home from "./Pages/Home";
import Content from "./Content";
const Main = (props) => {
  return (
    <div>
      <Content>
        <Home />
      </Content>
    </div>
  );
};

export default Main;
