import { useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "../../Redux/count";

const CounterActions = () => {

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCount(1))
  };
  
  const decrement = () => {

    dispatch(decrementCount(1))
  };
  
  return (
    <>
      <div className="btn-wrapper w-100">
        <button className="btn btn-dark" onClick={increment}>
          Increment +
        </button>
        <button className="btn btn-light" onClick={decrement}>
          decrement -
        </button>
      </div>
    </>
  );
};

export default CounterActions;
