import React from "react";

import PostCard from "./postCard/PostCard";
import { Grid, Container } from "@mui/material";
import AddPost from "./addPost/AddPost";

const Posts = () => {
  return (
    <Container>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={3}>
          <AddPost />
        </Grid>
        <Grid item md={9}>
          <PostCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
