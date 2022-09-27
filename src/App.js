import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count , setCount] = useState(0)

  function increment(){
    setCount(prevCount =>  prevCount + 1)
  }

  function decrement(){
    setCount(prevCount =>  prevCount - 1)
  }
  return (
    <div>
    <button onClick={increment}>increment</button>
    <span>{count}</span>
    <button onClick={decrement}>decrement</button>
  
    </div>
  );
}
