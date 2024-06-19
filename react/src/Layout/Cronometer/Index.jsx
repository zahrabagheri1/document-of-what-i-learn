import React, { useRef, useState } from "react";

function Index() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const handelStart = () => {
    if (ref.current) return;
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    ref.current = id;
  };

  const handelStop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const handelReset = () => {
    clearInterval(ref.current);
    ref.current = null;
    setCount(0);
  };

  return (
    <div>
      <div>
        Cronometer:
        <span>00:{count}</span>
      </div>

      <button onClick={handelStart}>Start</button>
      <button onClick={handelStop}>Stop</button>
      <button onClick={handelReset}>Reset</button>
    </div>
  );
}

export default Index;
