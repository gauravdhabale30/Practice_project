import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value " + this.state.count); // this will cal after funtion
    //   }
    // );
    //  console.log(this.state.count); // this will get called before funtion
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("callback value" + this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <div>counter {this.state.count}</div>
        <button onClick={() => this.incrementFive()}> + </button>
      </div>
    );
  }
}

export default Counter;
