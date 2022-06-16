//import logo from "./logo.svg";
import "./App.css";
import Classcounter from "./components/useEffect/Classcounter";
import DataFetch from "./components/useEffect/DataFetch";
import DataFetchingWithId from "./components/useEffect/DataFetchingWithId";
import DataFetchOnClick from "./components/useEffect/DataFetchOnClick";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import MouseContainer from "./components/useEffect/MouseContainer";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterFour from "./components/useState/HookCounterFour";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterTwo from "./components/useState/HookCounterTwo";

function App() {
  return (
    <div className="App">
      {/*-------------------------- useContext hooks --------------------------------- */}
      <UserProvider value="Gaurav">
        <ComponentA />
      </UserProvider>
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
