import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// npm i redux react-redux

const Redux = () => {
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
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center justify-center tracking-wide text-[250px] select-none">
        <p className="absolute top-12 left-1/2 -translate-x-1/2 text-xl font-bold text-slate-400">
          counter
        </p>
        <h1 className="text-[250px]">{counter}</h1>
      </div>
      <div className="space-x-2 text-sm -translate-y-9">
        <button
          onClick={increment}
          className="bg-slate-100 p-2 hover:bg-white hover:translate-y-0.5 border shadow rounded-md"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-slate-100 p-2 hover:bg-white hover:translate-y-0.5 border shadow rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={add10}
          className="bg-slate-100 p-2 hover:bg-white hover:translate-y-0.5 border shadow rounded-md"
        >
          Add 10
        </button>
        <button
          onClick={reset}
          className="bg-slate-100 p-2 hover:bg-white hover:translate-y-0.5 border shadow rounded-md"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Redux;
