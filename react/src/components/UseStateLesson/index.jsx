import { useState } from "react";

const UseStateLesson = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div> {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default UseStateLesson;
// Hooks => بتوان لاجیک را از کلس کامپوننت بیاریم توی فانکشنال کامپوننت
