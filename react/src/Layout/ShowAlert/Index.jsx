import React, { useEffect, useState } from "react";

function Index() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    setCount((prev) => prev + 1);
    setCount([...count, { id: 1, name: "zahra" }]);
  }, []);

  useEffect(() => {
    if (count) {
      alert(`${count[0]?.name} Win!`);
    }
  }, [count]);

  const handleClick = () => {
    setCount([...count, { id: 2, name: "pouriya" }]);
  };

  return (
    <div>
      {/* {count.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))} */}
      <div>{count.name}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Index;

// componentdidmount
// useEffect(() => {
// }, []);

// componentdidupdate
// درست بعد از ست استیت شدن بخواهیم کاری انجام دهیم

// هر وقت استیت داره ساخته میشه اگر به یوزافکتی پند شده باشد برای بار اول اجرا میشود
//هر وقت یگ چیز نانپرمتیو آپدیت بشه اجرا میشود


// Unmount
