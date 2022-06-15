import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      // return will work as unmounting method(cleanup code) and we can see result in mousecontainer on consle
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hook x- {x} y-{y}
    </div>
  );
}

export default HookMouse;
