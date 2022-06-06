import React from "react";
import Post from "./post/post";
// import useStyle from './styles';
import { useSelector } from 'react-redux'
const Posts = () => {
    // const classes=useStyle();
    const posts=useSelector(state=>state.posts);
    console.log(posts);
  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
