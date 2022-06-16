import React, { useReducer } from "react";

const initialState = {
  firstState: 0,
  secondState: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstState: state.firstState + action.value };
    case "decrement":
      return { ...state, firstState: state.firstState - action.value };
    case "incrementby5":
      return { ...state, firstState: state.firstState + action.value };
    case "decrementby5":
      return { ...state, firstState: state.firstState - action.value };
    case "increment2":
      return { ...state, secondState: state.secondState + 1 };
    case "decrement2":
      return { ...state, secondState: state.secondState - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count {count.firstState}</div>
      <div>count {count.secondState}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "incrementby5", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrementby5", value: 5 })}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch({ type: "increment2" })}>
        Increment 2nd
      </button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        Decrement 2nd
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
