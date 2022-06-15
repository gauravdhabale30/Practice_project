import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetchingWithId() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((Response) => {
        console.log(Response);
        setPost(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [id]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <div>
        <div>{post.body}</div>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.userId}</div>
      </div>
    </div>
  );
}

export default DataFetchingWithId;
