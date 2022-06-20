import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Fatch_data":
      return { loading: false, error: "", post: action.payload };
    case "Fatch_error":
      return { loading: false, error: "Someting is wrong", post: {} };
  }
};

function ReducerAndAxios() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((Response) => {
        dispatch({ type: "Fatch_data", payload: Response.data });
      })
      .catch((error) => {
        dispatch({ type: "Fatch_error" });
      });
  }, []);
  return (
    <div>
      {" "}
      {state.loading ? "loading" : state.post.title}
      {state.error ? "error" : null}
    </div>
  );
}

export default ReducerAndAxios;
