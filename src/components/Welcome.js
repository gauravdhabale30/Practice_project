import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class Component
        <p>
          Welcome {this.props.name}
          {this.props.surname}
        </p>
      </h1>
    );
  }
}

export default Welcome;
