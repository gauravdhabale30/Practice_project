import React, { useState } from "react";
import "./style.css";
function HookCounterFour() {
  const [item, setItem] = useState([]);
  const [active, setActive] = useState(false);

  const addNumber = () => {
    setActive(!active);
    setItem([
      ...item,
      { id: item.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addNumber} className={`${active ? "btn" : "btn1"}`}>
        Add number
      </button>
      <ul>
        {item.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default HookCounterFour;
