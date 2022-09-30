import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../redux/actions/posts/getPosts";


const DeletePosts = ({ deletePostById, postIdProps, setPostIdProps }) => {

  const dispatch = useDispatch();
  const [postId, setPostId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    setPostId(postIdProps);
  }, [postIdProps, setPostIdProps]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h3>Delete selected post</h3>
      <button
        style={{ color: "red" }}
        type="submit"
        variant="outlined"
        onClick={() => dispatch( deletePostById(postId, accessToken, () => dispatch(getPosts(accessToken))
            )
          )
        }
      >
        Delete
      </button>
    </Box>
  );
};
export default DeletePosts;
