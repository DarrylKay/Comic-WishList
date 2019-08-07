import React, { Component } from "react";
import Comics from "./pages/Comics";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Comics />
      </div>
    );
  }
}

export default App;
