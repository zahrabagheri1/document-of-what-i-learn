import { useCounterStore } from "./store";
import './App.css';
import { useEffect } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log('count', count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1});
};

function App() {
  // const count = useCounterStore((state) => state.count); //get the count
  const { count } = useCounterStore((state) => state.count); //destructuring the state

  return <OtherComponent count={count} />
}


const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);



useEffect(() => {
  // logCount();
  setCount();
}, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {count}
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default App;
