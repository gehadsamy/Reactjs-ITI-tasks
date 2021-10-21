import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Count from "../../components/counter/Count";
import CounterActions from "../../components/counter/CounterActions";
import { decrementCount, incrementCount } from "../../Redux/count";
import './Counter.css'
const Counter = () => {
  // const count=0;


  const CountState = useSelector (state => state);
  
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCount(1))
  };
  const decrement = () => {
    dispatch(decrementCount(1))
  };
  return (
    <section className="counter">
        <Count count={CountState} />
       <CounterActions/>
    </section>

  );
};

export default Counter;
