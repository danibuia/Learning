import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { Input } from "@mui/material";
import { Setter } from "../../../utils/Setter";
import { deletePost } from "../../../redux/actions/posts/deletePosts";


const DeletePosts = ({ postIdProps, setPostIdProps }) => {

  const dispatch = useDispatch();
  const [postId, setPostId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [deletePostById, setDeletePostById]=useState("")

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
      <form>
      
      <Input
      type="text"
      id="id"
      name="id"
      placeholder="baga aici"
      onChange={(e)=> Setter(e, setDeletePostById,'deletePostById' )}
      value={deletePostById?.length > 0 ? deletePostById : ''}
      />
        <h3>Delete selected post</h3>
        <button
          style={{ color: "red" }}
          type="submit"
          variant="outlined"
          onClick={() => {dispatch(deletePost(deletePostById, accessToken))}}
>
              
            
  
          Delete
        </button>
      </form>
    </Box>
  );
};
export default DeletePosts;
