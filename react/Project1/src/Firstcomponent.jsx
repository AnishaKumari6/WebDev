import React from "react";
import { useState } from "react";

const Firstcomponent = () => {
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
export default Firstcomponent;
