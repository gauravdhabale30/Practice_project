import React, { Component } from "react";
// rce to create class
class Message extends Component {
  // rconst to create constructor
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* important note when we want to pass data to funtion at that time inline funtion
       <button onClick={() => this.incrementFive()}> + </button> this should use

       when we dont want to pass data to funtion  at that time normal name of funtion
      <button onClick={clickHandler}> click</button> should use

      if we write   <button onClick={clickHandler()}> click</button>
      funtion will get called as soon as page is renderd before we click on butten */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
