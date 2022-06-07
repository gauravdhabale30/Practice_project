import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Gaurav" };
    console.log("LifeCycleB Constructor"); //4
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps"); //5  //4 for update
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle B component did mount"); //7
  }

  shouldComponentUpdate() {
    console.log("Life Cycle B shouldcomponentUpdate"); //5 for update
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapShotBeforUpdate"); //7 for update
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate"); //9 for update
  }
  render() {
    console.log("LifeCycleB Render"); //6   //6 for update
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
