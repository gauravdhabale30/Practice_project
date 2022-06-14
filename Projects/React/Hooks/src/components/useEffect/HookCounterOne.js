import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating documents title");
    document.title = `Clicked ${count} times hook`;
  }, [count]); // If present, effect will only activate if the values in the list change.
  // Accepts a function that contains imperative, possibly effectful code.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>count{count}</button>
    </div>
  );
}

export default HookCounterOne;
