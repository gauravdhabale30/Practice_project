import React, { Component } from "react";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Gaurav" };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A component did mount");
  }
  render() {
    console.log("LifeCycleA Render");
    return <div>Life Cycle A</div>;
  }
}

export default LifeCycleA;
