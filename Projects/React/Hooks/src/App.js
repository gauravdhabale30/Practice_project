//import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
// import ComponentA from "./components/useContext/ComponentA";
import FunCompoA from "./components/useContext/FunCompoA";
import { UserProvider } from "./components/useContext/UserContext";
import Classcounter from "./components/useEffect/Classcounter";
import DataFetch from "./components/useEffect/DataFetch";
import DataFetchingWithId from "./components/useEffect/DataFetchingWithId";
import DataFetchOnClick from "./components/useEffect/DataFetchOnClick";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import MouseContainer from "./components/useEffect/MouseContainer";
import ComponentB from "./components/useReducer/ComponentB";
import ComponentA from "./components/useReducer/ComponentA";
import ComponentC from "./components/useReducer/ComponentC";
import CounterOne from "./components/useReducer/CounterOne";
import CounterThree from "./components/useReducer/CounterThree";
import CounterTwo from "./components/useReducer/CounterTwo";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterFour from "./components/useState/HookCounterFour";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import StateAndAxios from "./components/useReducer/StateAndAxios";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export const CountContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/*-------------------------- useReducer hooks --------------------------------- */}

      <StateAndAxios />
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          count {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/*-------------------------- useContext hooks --------------------------------- */}
      {/* <FunCompoA /> */}
      {/* <UserProvider value="Gaurav">
        <ComponentA />
      </UserProvider> */}
      {/*-------------------------- useEffect hooks --------------------------------- */}
      {/* <DataFetchOnClick /> */}
      {/* <DataFetchingWithId /> */}
      {/* <DataFetch /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <Classcounter /> */}
      {/*-------------------------- useState hooks --------------------------------- */}
      {/* <HookCounterFour />
      <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter />
      <ClassCounter /> */}
    </div>
  );
}

export default App;
