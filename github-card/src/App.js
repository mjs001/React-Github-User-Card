import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/styles.css";
import Followers from "./components/Followers";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <User />
      <Followers />
    </div>
  );
}

export default App;
