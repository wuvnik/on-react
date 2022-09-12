import { createSlice } from "@reduxjs/toolkit";
// import { notificationActions } from "./notification-slice";

type ICartItem = {
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string;
};

type IInitialState = {
  itemsList: ICartItem[];
  totalQty: number;
  showCart: boolean;
  changed: boolean;
};

const initialState: IInitialState = {
  itemsList: [],
  totalQty: 0,
  showCart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "createSLice",
  // initialState: {
  //   itemsList: [],
  //   totalQty: 0,
  //   showCart: false,
  // },
  initialState,
  reducers: {
    replaceData(state, action) {
      state.totalQty = action.payload.totalQty;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;

      // Check if item is already in cart
      const existingItem: any = state.itemsList.find(
        (item: any) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQty++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem: ICartItem | any = state.itemsList.find(
        (item) => item.id === id
      );
      // const existingItem: any = state.itemsList.find(
      //   (item: any) => item.id === id
      // );

      if (existingItem?.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQty--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

// OPTIONAL

// export const sendCartData = (cart: any) => {
//   return async (dispatch: any) => {
//     const sendCartItem = async () => {
//       const res = await fetch(
//         "https://redux-store-95982-default-rtdb.firebaseio.com/cartItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       const data = await res.json();

//       // send state as request is successfull
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Successfully added",
//           type: "success",
//         })
//       );
//     };

//     // METHOD B
//     dispatch(
//       notificationActions.showNotification({
//         open: true,
//         message: "Sending...",
//         type: "info",
//       })
//     );
//     try {
//       await sendCartItem()
//     } catch (error) {
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Something went wrong!",
//           type: "warning",
//         })
//       );
//     }
//   }
// }

export const cartActions = cartSlice.actions;

export default cartSlice;
