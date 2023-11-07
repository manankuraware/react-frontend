import React, { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // const inputRef = useRef();

  // function focus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = "Some Value";
  // }

  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name
  }, [name]);
  return (
    <>
      {/* <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My Name is {name}. and it used to be {prevName.current}
      </div>
      {/* <div>I rendered {renderCount.current} times !</div> */}
      {/* <button onClick={focus}>Focus </button> */}
    </>
  );
}

export default App;
