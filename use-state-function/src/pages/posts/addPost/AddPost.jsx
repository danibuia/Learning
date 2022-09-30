import React, { useState, useEffect } from "react";
import { Setter } from "../../../utils/Setter";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/posts/addPosts";
function AddPosts() {
  const dispatch = useDispatch();


  const [postTitle, setPostTitle] = useState("");
  const [postSubtitle, setPostSubtitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);
  return (
    <>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="Post Title">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Title"
            onChange={(e) => Setter(e, setPostTitle, "postTitle")}
            value={postTitle?.length > 0 ? postTitle : ""}
          /
          >
          <label htmlFor="Post Title">Post Subtitle</label>
          <input
            type="text"
            id="postSubtitile"
            name="postSubtititle"
            placeholder="Subtitile"
            onChange={(e) => Setter(e, setPostSubtitle, "postSubtitle")}
            value={postSubtitle?.length > 0 ? postSubtitle : ""}
          />
          <label htmlFor="LastName">Post Description</label>
          <input
            type="text"
            id="postDescription"
            name="postDescription"
            placeholder="postDescription"
            onChange={(e) => Setter(e, setPostDescription, "postSubtitle")}
            value={postDescription?.length > 0 ? postDescription : ""}
          />
        </form>
        <button type="submit" onClick={() => dispatch(addPost(postTitle, postSubtitle, postDescription, accessToken))} disabled={false}>
        Add post
      </button>
   
      </div>
    </>
  );
}
export default AddPosts;
