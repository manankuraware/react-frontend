import React, { useState } from "react";

function App() {
  // const [count, setCount] = useState(4);
  // const [count, setCount] = useState(()=>{
  //   console.log('run function');
  //   // here run function prints only once
  //   return 4;
  // });

  // function decrementCount() {
  //   // setCount(count - 1);
  //   // setCount(prevCount=>prevCount-1);
  //   setCount(prevCount=>prevCount-1);
  // }
  // function incrementCount() {
  //   setCount(prevCount=>prevCount+1);
  // }

  //passing object as parameter
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
