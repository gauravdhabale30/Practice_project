import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times hook`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count{count}</button>
    </div>
  );
}

export default HookCounterOne;
