import React from "react";
import ReactDOM from "react-dom";

//Look into index.html we have created other div tag by id portal-root and inspect in browser we can see
// that we have created new dom tree and this portal.js falls in that tree.
function Portal() {
  return ReactDOM.createPortal(
    <h1>Portal-Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default Portal;
