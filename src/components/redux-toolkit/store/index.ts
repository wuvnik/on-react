import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      // state.counter += 1;
      state.counter++;
    },
    decrement(state) {
      // state.counter -= 1;
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const actions = counterSlice.actions;

const storeRtk = configureStore({
  reducer: counterSlice.reducer,
});

export default storeRtk;
