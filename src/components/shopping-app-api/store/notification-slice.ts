import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
  show: false,
};

const notificationSlice = createSlice({
  name: "notification",
  // initialState: {
  //   notification: null as any,
  // },
  initialState: { notification: initialState },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        show: action.payload.open,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
