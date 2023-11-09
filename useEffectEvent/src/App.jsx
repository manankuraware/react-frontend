import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import "./App.css";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      onTick();
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay, onTick]);

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrementDecrease = () => {
    if (increment === 0) return;
    setIncrement((i) => i - 1);
  };

  const handleIncrementIncrease = () => {
    setIncrement((i) => i + 1);
  };

  const handleDelayDecrease = () => {
    if (delay === 100) return;
    setDelay((d) => d - 100);
  };

  const handleDelayIncrease = () => {
    setDelay((d) => d + 100);
  };

  return (
    <div className="wrapper">
      <h1 className="header">
        Counter: {count}
        <button onClick={handleReset}>Reset</button>
      </h1>
      <hr />
      <p>
        Increment by:
        <button onClick={handleIncrementDecrease}>-</button>
        <b>{increment}</b>
        <button onClick={handleIncrementIncrease}>+</button>
      </p>
      <p>
        Increment delay:
        <button disabled={delay === 100} onClick={handleDelayDecrease}>
          -100 ms
        </button>
        <b>{delay} ms</b>
        <button onClick={handleDelayIncrease}>+100 ms</button>
      </p>
    </div>
  );
}
