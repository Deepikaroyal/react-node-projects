import React, { useState } from "react";
import '../App.css';
export default function Counter() {
  const [count, setCount] = useState(5);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
    console.log("i am decrement  tester")
  }
  return (
    <>
      <span>{count}</span>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
