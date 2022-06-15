import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetch() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        console.log(Response);
        setPost(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return (
    <div>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;
