import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../features/showSlice";

const SubChild1 = () => {
  const dispatch = useDispatch();

  const data = useSelector((c) => {
    console.log(c);
    return c.show.value;
    // return c.showwww.value;
  });
  return (
    <div>
      <h1>SubChild1 : {data}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(10))}>
        Increase By Value
      </button>
      <button onClick={() => dispatch(decrementByValue(10))}>
        Decrement By Value
      </button>
    </div>
  );
};

export default SubChild1;
