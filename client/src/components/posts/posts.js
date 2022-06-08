import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./post/post";

import useStyle from './styles';

import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {
    const classes=useStyle();
    const posts=useSelector(state=>state.posts);
    console.log(posts);
  return (
     !posts.length ? <CircularProgress />:(
       <Grid className={classes.conatiner} container alignItems="stretch" spacing={3}>

         {posts.map((post)=>(
           <Grid key={post._id} item xs={12} sm={6}>
             <Post post={post} setCurrentId={setCurrentId}/>
           </Grid>
         ))}

       </Grid>
     )
  );
};

export default Posts;
