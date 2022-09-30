import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../home/constants/Constants";
import { Setter } from "../../../utils/Setter";

function AddPosts() {
  const [postTitle, setPostTitle] = useState("");
  const [postSubtitle, setPostSubtitle] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const onAddPost = () => {
    axios
      .post(
        `${baseUrl}/admins/add-post/all`,
        {
          postTitle: postTitle,
          postSubtitle: postSubtitle,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        // window.location.pathname = "/home";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const postPost = () => {
    return accessToken.length > 0 ? onAddPost() : null;
  };
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    postPost();
    // eslint-disable-next-line
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
          />
          <label htmlFor="LastName">Post Subtitle</label>
          <input
            type="text"
            id="PostSubtitile"
            name="PostSubtititle"
            placeholder="Subtitile"
            onChange={(e) => Setter(e, setPostSubtitle, "postSubtitle")}
            value={postSubtitle?.length > 0 ? postSubtitle : ""}
             />
        </form>
        <button type="button" onClick={onAddPost} disabled={false}>
          Add post
        </button>
      </div>
    </>
  );
}
export default AddPosts;
