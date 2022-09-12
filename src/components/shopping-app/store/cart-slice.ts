// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

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
};

const initialState: IInitialState = {
  itemsList: [],
  totalQty: 0,
  showCart: false,
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
    addToCart(state, action) {
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
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
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

export const cartActions = cartSlice.actions;

export default cartSlice;

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: {
//     isLoggedIn: false,
//   },
//   reducers: {
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//   },
// });
