import React, { useState, useEffect } from "react";

class TestClass extends React.Component<MyState> {
  state: MyState = {
    post: 0,
  };

  componentDidMount() {
    const fetchPost = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const postData = await response.json();
      this.setState({ post: postData });
    };
    fetchPost();
  }
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  //     const postData = await response.json();
  //     this.setState({posts: postData});
  //   };
  //   fetchPost();
  // }, [])

  render() {
    return (
      <div>
        {this.state?.post?.map((item: any) => {
          console.log(item);

          <div>
            <span>{item.title}</span>
            <span>{item.body}</span>
          </div>;
        })}
      </div>
    );
  }
}

export default TestClass;

type MyState = {
  post: any; // like this
};

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
