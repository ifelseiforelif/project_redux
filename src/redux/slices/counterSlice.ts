import { createSlice } from "@reduxjs/toolkit";

type CounterType = {
  counter: number;
};
const initialState: CounterType = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
});
