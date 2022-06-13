import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={increment}>count {count}</button>
  //   </div>
  // );                   // both work in same way this is explicit function 2nd is inline function
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count {count}
      </button>
    </div>
  );
}

export default HookCounter;
