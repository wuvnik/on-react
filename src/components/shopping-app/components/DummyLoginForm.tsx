import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const DummyLoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="relative flex flex-col md:w-[400px] p-6 rounded-xl border shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Shopping with Redux
        </h1>
        <p className="mt-2 text-sm text-center font-semibold text-zinc-500">
          Log in to continue
        </p>

        <div className="flex flex-col mt-12">
          <label htmlFor="email" className="mb-1 text-gray-500 font-semibold">
            Email
          </label>
          <input
            name="email"
            type="text"
            placeholder="email@example.com"
            className="p-2 w-full text-sm text-semibold border rounded outline outline-0 focus:outline-1 focus:outline-slate-800"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="password"
            className="mb-1 text-gray-500 font-semibold"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="p-2 w-full text-sm text-semibold border rounded outline outline-0 focus:outline-1 focus:outline-slate-800"
          />
        </div>
        <button
          className="w-full p-1.5 mt-8 bg-neutral-600 text-white font-bold rounded"
          onClick={handleSubmit}
        >
          Log in
        </button>
        <p className="absolute px-3 -bottom-6 right-0 flex text-xs text-right text-gray-400">
          *Example log-in form only. No inputs required.
        </p>
      </form>
    </div>
  );
};

export default DummyLoginForm;
