import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    // here are our all actions..
    // addData: () => {

    // },
    // showData: ( state, actions) => {

    // },
    showData: (state) => {
      state.value = state.value;
    },

    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrementByValue: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const {
  showData,
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} = showSlice.actions;

export default showSlice.reducer;
