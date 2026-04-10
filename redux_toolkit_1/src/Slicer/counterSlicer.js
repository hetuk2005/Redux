import { createSlice } from "@reduxjs/toolkit";

export const counter_Slicer = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    /* decrements: {
            reducer: ()=>{},
            prepare:()=>{}
        } */
  },
});

export const { increment, decrement} = counter_Slicer.actions;

export const counterSlicer =counter_Slicer.reducer
