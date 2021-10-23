import { useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "../../Redux/count";
import { Button } from "react-bootstrap";
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
      <div  md="auto count__body">
     
            <div className="count__app">
            <div className="buttons">
            <Button  variant="outline-danger" onClick={increment}>
         +
        </Button>
        <Button  variant="outline-danger" onClick={decrement}>
         -
        </Button>
            </div>
         
              </div>
    
      </div>
    </>
  );
};

export default CounterActions;