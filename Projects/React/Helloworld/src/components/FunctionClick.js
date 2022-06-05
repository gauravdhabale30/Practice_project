import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button click");
  }
  return (
    <div>
      {/* important note when we want to pass data to funtion at that time inline funtion
       <button onClick={() => this.incrementFive()}> + </button> this should use

       when we dont want to pass data to funtion  at that time normal name of funtion
      <button onClick={clickHandler}> click</button> should use

      if we write   <button onClick={clickHandler()}> click</button>
      funtion will get called as soon as page is renderd before we click on butten */}
      <button onClick={clickHandler}> click</button>
    </div>
  );
}

export default FunctionClick;
