import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import yaadein from "./images/yaadein.png";
import Form from "./components/forms/form.js";
import Posts from "./components/posts/posts.js";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  const classes = useStyle();

const [currentId, setCurrentId]= useState(null);

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch, currentId]);
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Yaadein
        </Typography>
        <img
          className={classes.image}
          src={yaadein}
          alt="yaadein"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* xs==xtra small, sm==small-medium */}
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId= {currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
