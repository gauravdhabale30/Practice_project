import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Gaurav" };
    console.log("LifeCycleA Constructor"); //1
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps"); //2
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A component did mount"); //8
  }
  render() {
    console.log("LifeCycleA Render"); //3
    return (
      <div>
        <div> Life Cycle A</div>
        <div>
          <LifeCycleB></LifeCycleB>
        </div>
      </div>
    );
  }
}

export default LifeCycleA;
