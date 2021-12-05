import React from "react";
import "./App.css";
import Timer from "./Components/Timer/Timer";

function App() {
  return (
    <div className="mainDiv">
      <div className="subDiv"><br/><br/><br/>
          <h1 className="heading">
            React Timer App
          </h1>
        <div className="timerDiv">
          <div className="timer">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
