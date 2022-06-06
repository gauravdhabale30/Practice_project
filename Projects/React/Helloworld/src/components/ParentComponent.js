import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(child) {
    alert(`Hello ${this.state.message} ${child}`);
  }
  render() {
    return (
      <div>
        <ChildComponent GreetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
