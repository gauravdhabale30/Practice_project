import React, { Component } from "react";
// in class component props are already present
class Welcome extends Component {
  render() {
    // destructuring props in class component
    const { name, surname } = this.props;
    return (
      <h1>
        Class Component
        <p>
          Welcome {name}
          {surname}
        </p>
      </h1>
    );
    // structuring props in class component
    // return (
    //   <h1>
    //     Class Component
    //     <p>
    //       Welcome {this.props.name}
    //       {this.props.surname}
    //     </p>
    //   </h1>
    // );
  }
}

export default Welcome;
