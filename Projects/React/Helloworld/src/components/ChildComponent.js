import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.GreetHandler("From Child")}>
        This is Child
      </button>
    </div>
  );
}

export default ChildComponent;
