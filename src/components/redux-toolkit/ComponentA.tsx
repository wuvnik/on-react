import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

const ComponentA = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const add10 = () => {
    dispatch(actions.addBy(20));
  };

  const reset = () => {
    dispatch(actions.reset());
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-black text-white">
      <h1 className="text-2xl">Component 1</h1>
      <h2 className="text-lg font-bold">Counter: {counter}</h2>
      <div className="space-x-2 space-y-2">
        <button className="bg-blue-500 px-3 rounded-lg" onClick={increment}>
          Increment
        </button>
        <button className="bg-blue-500 px-3 rounded-lg" onClick={decrement}>
          Decrement
        </button>
        <button className="bg-blue-500 px-3 rounded-lg" onClick={add10}>
          Add 20
        </button>
        <button className="bg-blue-500 px-3 rounded-lg" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
