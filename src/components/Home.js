import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>Counter</h1>
      <h1>Counter Value: {state}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </div>
  );
}
