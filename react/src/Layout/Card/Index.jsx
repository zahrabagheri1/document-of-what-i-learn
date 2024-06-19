import React, { useEffect, useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  const logFunc = (e) => {
    console.log(e);
  };

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    document.addEventListener("mousemove", logFunc);
    return () => {
      document.removeEventListener("mousemove", logFunc);
    };
  }, []);

  return <div>{count}</div>;
}

export default Index;
