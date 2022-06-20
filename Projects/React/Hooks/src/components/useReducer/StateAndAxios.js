import React, { useState, useEffect } from "react";
import axios from "axios";
function StateAndAxios() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((Response) => {
        setLoading(false);
        setError("");
        setPost(Response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Someting went wrong");
        setPost({});
      });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? "error" : null}
    </div>
  );
}

export default StateAndAxios;
