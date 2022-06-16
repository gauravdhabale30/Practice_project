import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <h1>Hello {userName}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
