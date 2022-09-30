import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../home/constants/Constants";
import { Grid, Container } from "@mui/material";
import DeletePosts from "./deletePost/Delete.Post";
import { deletePost } from "../../redux/actions/posts/deletePosts";
import PostCard from "./getPost/PostCard";
import AddPosts from './addPost/AddPost';


const Posts = () => {
  const [updatedPosts, setUpdatedPosts] = useState([]);
  const [postIdProps, setPostIdProps] = useState("");

  const getPost = (accessToken) => {
    if (accessToken) {
      axios
        .get(`${baseUrl}/admins/get-posts/all`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response.data.members);
          const myData = response.data.members; // store the members ( from databse after request from server ) on myData variable
          let rowWidthId = []; // create an empty array where the rows that we will render on ui, will be saved
          myData.map((item, index) => {
            //map- is a function for JS Arrays - it will return an Array with the same lenght but modifed as we want
            return rowWidthId.push({ ...item, id: index }); /// ...item means that it will add every item from mapped array -myData- and it will show the object will all properties + id with the value 'index' that represend the item position from array starting from 0
          });
          setUpdatedPosts(rowWidthId);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  const addPost = (
    postTitle,
    postAuthor,
    postSubtitle,
    postDescription,
    token
  ) => {
    axios
      .post(
        `${baseUrl}/admins/add-post`,
        {
          postTitle: postTitle,
          postAuthor: postAuthor,
          postSubtitle: postSubtitle,
          postDescription: postDescription,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log("response ", response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        getPost(setUpdatedPosts, token);
      });
  };

  useEffect(() => {}, [postIdProps, setPostIdProps]);

  return (
    <Container>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={3}>
          <AddPosts addPost={addPost} />
          <DeletePosts deletePostById={deletePost} />
        </Grid>
        <Grid item md={9}>
          <PostCard updatedPosts={updatedPosts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
