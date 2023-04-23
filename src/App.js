import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const App = () => {
  let Time = new Date().toLocaleDateString();
  const [cTime, setCtime] = useState();

  const updatedTime = () => {
    Time = new Date().toLocaleTimeString();
    setCtime(Time);
  };

  setInterval(updatedTime, 1000);

  return (
    <>
      <div className="center">
        <h1>{cTime}</h1>
      </div>
    </>
  );
};

export default App;
