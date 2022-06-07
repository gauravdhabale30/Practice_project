import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Gaurav" };
    console.log("LifeCycleA Constructor"); //1
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps"); //2   //1 for update
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A component did mount"); //8
  }

  shouldComponentUpdate() {
    console.log("Life Cycle A shouldcomponentUpdate"); //2 for update
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapShotBeforUpdate"); //8 for update
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate"); //10 for update
  }
  submit = () => {
    this.setState({
      name: "GDx",
    });
  };

  render() {
    console.log("LifeCycleA Render"); //3  //3 for update
    return (
      <div>
        <div> Life Cycle A</div>
        <button onClick={this.submit}>Submit</button>
        <div>
          <LifeCycleB></LifeCycleB>
        </div>
      </div>
    );
  }
}

export default LifeCycleA;
