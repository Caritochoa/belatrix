import React, { Component } from "react";
import FileReceiver from "./components/FileReceiver";
import Header from "./components/Header";

import "./App.css";
import "./header.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Ubigeos</h1>
        <FileReceiver />
      </div>
    );
  }
}

export default App;
