import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Gaurav" };
    console.log("LifeCycleB Constructor"); //4
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps"); //5
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle B component did mount"); //7
  }
  render() {
    console.log("LifeCycleB Render"); //6
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
