import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [], errormsg: "" };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // to see error just change url
      .then((Response) => {
        console.log(Response);
        this.setState({ posts: Response.data });
      })
      .catch((Error) => {
        console.log(Error);
        this.setState({ errormsg: "Error has been occured" });
      });
  }

  render() {
    const { posts, errormsg } = this.state;
    return (
      <div>
        <h2> Post List</h2>
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title}</div>)
          : null}
        {errormsg ? <div>{errormsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
