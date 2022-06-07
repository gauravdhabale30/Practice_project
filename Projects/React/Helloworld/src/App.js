import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <Form /> */}
      {/* <StyleSheet colors={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBinding /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Gaurav" surname="Dhabale">
        <p>This is children</p>
      </Greet>
      <Greet name="Loskesh" surname="Jawale">
        <button>Action</button>
      </Greet>
      <Greet name="Kartik" surname="Kumbhakarna">
        <h6>child element</h6>
      </Greet> */}
      {/* <Welcome name="Gaurav" surname="Dhabale"></Welcome> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
