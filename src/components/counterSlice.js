import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "Counter",
  initialState: { count: 0 },

  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});
export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;
