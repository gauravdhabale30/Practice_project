import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetchOnClick() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then((Response) => {
        console.log(Response);
        setPost(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [num]);

  const handler = () => {
    setNum(id);
  };
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button onClick={handler}>Fetch Data</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetchOnClick;
