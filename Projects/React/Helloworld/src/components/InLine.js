import React from "react";

// always write inside boday every thing in camel case
const heading = {
  fontSize: "72px",
  color: "red",
};
function InLine() {
  return (
    <div>
      <h2 style={heading}>Inline</h2>
    </div>
  );
}

export default InLine;
