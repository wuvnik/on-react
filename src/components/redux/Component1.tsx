import { useDispatch, useSelector } from "react-redux";

const Component1 = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const add10 = () => {
    dispatch({ type: "ADD", payload: 10 });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
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
          Add 10
        </button>
        <button className="bg-blue-500 px-3 rounded-lg" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Component1;
