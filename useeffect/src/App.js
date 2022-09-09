import React from "react";
import "./App.css";
import { Fragment, useEffect , useState } from "react";

const App = () => {

  const [count,setCount]=useState(0);
  const [displayBox,setDisplayBox]=useState(false);

  const handleIncrease=() => {
    return setCount(count+1);
  }
  const handleDecrease=() => {
    return setCount(count-1);
  }
  
  const handleDisplay=() => {
    return setDisplayBox(!displayBox);
  }

  useEffect(() => {
    console.log("Count", count);
  },[count]);

  useEffect(() => {
    console.log("Display", displayBox);
  },[displayBox]);

  return (
    <Fragment>

      <button onClick={handleIncrease}>
        Increase
      </button>
      <button onClick={handleDecrease}>
        Increase
      </button>

      <button onClick={handleDisplay}>
        Display
      </button>


    </Fragment>
  );
};

export default App;