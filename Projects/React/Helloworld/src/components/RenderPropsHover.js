import React, { Component } from "react";

class RenderPropsHover extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Mouse hover {count} Times</h2>
      </div>
    );
  }
}

export default RenderPropsHover;
