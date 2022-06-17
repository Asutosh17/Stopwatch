import React, { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(false);

  useEffect(() => {
    let interval = null;
    if (stopwatch) {
      interval = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [stopwatch]);

  return (
    <div>
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h1>
      <br />
      <div>
        <button onClick={() => setStopwatch(true)}>Start</button>
        <button onClick={() => setStopwatch(false)}>Stop</button>
        <button onClick={() => setStopwatch(true)}>Pause</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};
