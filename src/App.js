import React from "react";
import "./App.css";

import Container from "./components/Container";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
