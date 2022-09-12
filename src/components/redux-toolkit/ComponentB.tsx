import { useSelector } from "react-redux";

const ComponentB = () => {
  const counter = useSelector((state: any) => state.counter);

  return (
    <div className="w-1/2 bg-white">
      <h1>Component 2</h1>
      <h1 className="text-lg font-bold">Counter: {counter}</h1>
    </div>
  );
};

export default ComponentB;
