import { useEffect, useRef } from "react";

export const UseRefLesson = () => {
  const ref = useRef(0);
  // const ref = useRef({
  //   0: null,
  //   1: null,
  // });

  // useEffect(() => {
    // console.log(ref.current);
    // }, []);

  console.log(ref.current);
  // at first console log show undfined because jsx not render
  
  // ref.current don't update and change because its don't rerender
  // chenge *ref* its never rerender page and elementes

  // ref: 1.get refrence by element 2.save data init that we dont want to re-reandering

  return (
    <div>
      {/* <div ref={ref}>Hello zahra joon!</div> */}
      {/* <button
        ref={(ref) => (ref.current = { ...ref.current, 0: ref })}
        onClick={() => setCount((prev) => prev + 1)}
        >
        +
        </button>
        <button
        ref={(ref) => (ref.current = { ...ref.current, 1: ref })}
        
        onClick={() => setCount((prev) => prev - 1)}
        >
        -
        </button> */}

      <div> {ref.current}</div>
      <button onClick={() => (ref.current += 1)}>+</button>
      <button onClick={() => (ref.current -= 1)}>-</button>
    </div>
  );
};

// const useRef = (intial) => {
//   const intialRef = intial;
//   const ref = {
//     get current() {
//       return intialRef;
//     },
//     set current(x) {
//       intialRef = x;
     //thay dont write code for re-render 
//     },
//   };

  // console.log(ref.current);
  // console.log((ref.current = "fellan"));

//   Object.seal(ref);
//   return ref;
// };
