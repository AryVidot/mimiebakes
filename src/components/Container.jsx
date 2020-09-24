import React from "react";
const Container = (props) => {
  return (
    <div className="app">
      <main>{props.children}</main>
    </div>
  );
};

export default Container;
