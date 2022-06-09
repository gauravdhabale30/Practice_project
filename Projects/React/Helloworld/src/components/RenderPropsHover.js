import React, { Component } from "react";

class RenderPropsHover extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Mouse hover {count} Times</h2>
      </div>
    );
  }
}

export default RenderPropsHover;
