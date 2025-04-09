import React, { Component } from "react";
import "./App.css";
import { Wedding } from "./Wedding";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wedding planning checklist</h1>
        <div className="Wedding">
          <Wedding />
        </div>
      </div>
    );
  }
}

export default App;
