import React, { Fragment, useRef } from "react";

function RefDemo() {
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.focus();
  };
  return (
    <>
      <div>
        <input type="text"></input>
        <input type="text" ref={focusPoint}></input>
        <button onClick={onClickHandler}>Action</button>
      </div>
    </>
  );
}

export default RefDemo;

// function RefDemo() {
//   // Creating a ref object using useRef hook
//   const focusPoint = useRef(null);
//   const onClickHandler = () => {
//     focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
//     focusPoint.current.focus();
//   };
//   return (
//     <Fragment>
//       <div>
//         <button onClick={onClickHandler}>ACTION</button>
//       </div>
//       <label>Click on the action button to focus and populate the text.</label>
//       <br />
//       <textarea ref={focusPoint} />
//     </Fragment>
//   );
// }

// export default RefDemo;
