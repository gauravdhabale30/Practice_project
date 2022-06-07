import React from "react";
import "./StyleSheet.css";
function StyleSheet(props) {
  const colorsName = props.colors ? "primary" : "";

  return <div class={`${colorsName} text`}>Spread Sheet</div>;
}

export default StyleSheet;
