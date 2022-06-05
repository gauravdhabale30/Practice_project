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
        console.log(`callback value ${this.state.count}`);
      }
    );
  }
  render() {
    return (
      <div>
        <div>counter {this.state.count}</div>
        {/* important note when we want to pass data to funtion at that time inline funtion
       <button onClick={() => this.incrementFive()}> + </button> this should use

       when we dont want to pass data to funtion  at that time normal name of funtion
      <button onClick={clickHandler}> click</button> should use

      if we write   <button onClick={clickHandler()}> click</button>
      funtion will get called as soon as page is renderd before we click on butten */}
        <button onClick={() => this.incrementFive()}> + </button>
      </div>
    );
  }
}

export default Counter;
