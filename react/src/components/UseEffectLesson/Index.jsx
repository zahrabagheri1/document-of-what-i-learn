import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef, useState } from "react";

function Index() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(ref.current);
    }, 5000);

    console.log("slm Zahara");
  }, []);

  return (
    <div>
      <h1>Effect</h1>
      <div>{count}</div>
    </div>
  );
}

export default Index;

// componentdidmount
// useEffect(()=>{
// },[])

// Life cycel of react : 1.trigger 2.render 3.commit
