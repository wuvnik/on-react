import { useDispatch } from "react-redux";
import { notificationActions } from "../store/notification-slice";

const Notification = ({ type, message }: { type: string; message: string }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      notificationActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <div className="absolute top-16 right-10 w-72 bg-slate-50 p-2 border border-slate-400 font-semibold rounded">
      {message}
      <span
        className="absolute right-0 px-4 cursor-pointer"
        onClick={handleClose}
      >
        X
      </span>
    </div>
  );
};

export default Notification;
