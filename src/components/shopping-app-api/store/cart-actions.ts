import { cartActions } from "./cart-slice";
import { notificationActions } from "./notification-slice";

export const fetchCartData = () => {
  return async (dispatch: any) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-store-95982-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Something went wrong!",
          type: "warning",
        })
      );
    }
  };
};

export const sendCartData = (cart: any) => {
  return async (dispatch: any) => {
    const sendCartItem = async () => {
      const res = await fetch(
        "https://redux-store-95982-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      // send state as request is successfull
      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Successfully added",
          type: "success",
        })
      );
    };

    // METHOD B
    dispatch(
      notificationActions.showNotification({
        open: true,
        message: "Sending...",
        type: "info",
      })
    );
    try {
      await sendCartItem();
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Something went wrong!",
          type: "warning",
        })
      );
    }
  };
};
