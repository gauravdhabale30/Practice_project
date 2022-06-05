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
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
