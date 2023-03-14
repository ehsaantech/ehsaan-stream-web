import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Approutes />
    </BrowserRouter>
  );
}

export default App;
