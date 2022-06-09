import React, { Component } from "react";

class RenderPropUser extends Component {
  render() {
    return (
      <div>
        <div>{this.props.render(false)}</div>
      </div>
    );
  }
}

export default RenderPropUser;
