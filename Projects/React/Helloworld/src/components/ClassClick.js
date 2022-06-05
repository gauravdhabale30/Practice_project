import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    function clickHandler() {
      console.log("clicked class event handler");
    }
    return (
      <div>
        <button onClick={clickHandler}>click me</button>
      </div>
    );
  }
}

export default ClassClick;
