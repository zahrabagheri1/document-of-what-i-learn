import { useState } from "react";
import UseStateLesson from "./components/UseStateLesson/index";
import UseRefLesson from "./components/UseRefLesson/index";
import UseEffectLesson from "./components/UseEffectLesson/Index";
import Cronometer from "./Layout/Cronometer/Index";
import ShowAlert from "./Layout/ShowAlert/Index";
import Card from "./Layout/Card/Index";
import FetchData from "./Layout/FetchData/Index";
import FetchDataWithHooks from "./Layout/FetchDataWithHooks/Index";

const App = () => {
  const [show, setShow] = useState(true);
  const [isActive, setActive] = useState(false);

  return (
    <div>
      {/* <UseStateLesson /> */}
      {/* <UseRefLesson/> */}
      {/* <Cronometer /> */}
      {/* <UseEffectLesson /> */}
      {/* <ShowAlert/> */}

      {/* {isActive && <Card />} */}
      {/* <button onClick={() => setActive(!isActive)}>Switch Active</button> */}

      {/* <FetchData /> */}
      <FetchDataWithHooks />
    </div>
  );

  // ! conditional rendering

  // Todo: 1.
  // return (
  //   <div
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     {show ? "Hello World" : "Hello zahra"}
  //   </div>
  // );

  // Todo: 2.
  // if (show) {
  //   return (
  //     <div
  //       onClick={() => {
  //         setShow(!show);
  //       }}
  //     >
  //       Hello World!
  //     </div>
  //   );
  // }

  // return (
  //   <div
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     Hello Worldddddddddddddddddd!
  //   </div>
  // );

  // Todo: 3.
  // return show ? (
  //   <div
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     Show True!
  //   </div>
  // ) : (
  //   <div
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     Show False!
  //   </div>
  // );

  // Todo: 4.
  // return (
  //   show && (
  //     <div
  //       onClick={() => {
  //         setShow(!show);
  //       }}
  //     >
  //       Show True!
  //     </div>
  //   )
  // );
};
export default App;

/*
import React from "react";
class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // mount
    document.addEventListener("scroll", () => {});
  }
  componentDidUpdate() {
    // taghir state
  }

  componentWillUnmount() {
    // unmount
    // greacfull shutdown component
    document.removeEventListener("scroll", () => {});
  }
}

*/
