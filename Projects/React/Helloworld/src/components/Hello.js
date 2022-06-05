import React from "react";
// using jsx
const Hello = () => {
  // return (
  //   <div className='dummyClass'>
  //     <h1>Hello Gaurav</h1>
  //   </div>
  // );

  // without uing jsx
  return React.createElement(
    "div",
    { id: "hello", class: "dummyclass" },
    React.createElement("h1", null, "Hello Gaurav")
  );
};

export default Hello;
