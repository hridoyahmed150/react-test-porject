import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TestFunctional from "./components/functional-component/TestFunctional";
import TestClass from "./components/class-component/TestClass";

function App() {
  return (
    <div className="App">
      {/* <TestFunctional></TestFunctional> */}
      <TestClass></TestClass>
    </div>
  );
}

export default App;
