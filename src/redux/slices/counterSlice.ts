import { createSlice } from "@reduxjs/toolkit";

type CounterType = {
  value: number;
};

const initialState: CounterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { value: state.value + 1 };
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment } = counterSlice.actions;

export type { CounterType };
