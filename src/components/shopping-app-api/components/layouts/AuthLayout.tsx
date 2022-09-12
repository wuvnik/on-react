import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleLogOut = (e: { preventDefault: () => void }) => {
    dispatch(authActions.logout());
  };
  return (
    <div className="h-screen">
      <nav className="flow-root border px-2 md:px-10 py-5 shadow">
        <div className="font-bold float-left">Redux Shop (API)</div>
        <button
          className="float-right bg-slate-300 px-3 py-1 rounded text-sm"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </nav>
      <div className="mx-2 md:mx-10 mt-5">{children}</div>
    </div>
  );
};

export default AuthLayout;
