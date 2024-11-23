import React, { useState } from "react";
import "./Truck.css";

const Truck = () => {
  const [state, setState] = useState("");
  let [check, setCheck] = useState("");
  const checkStatus = () => {
    setCheck(state);
  };

  let id;
  const updateLocation = () => {
    if (id) {
      setState("Running");
      clearInterval(id);
    }
    id = setInterval(() => {
      setState("Stop");
      clearInterval(id);
    }, 6000);
  };

  return (
    <div className="main">
      <h1>Truck Status Checking: {check}</h1>
      <div className="Stop">
        <button onClick={checkStatus}>Check Status</button>
        <button onClick={updateLocation}> update location</button>
      </div>
    </div>
  );
};

export default Truck;
