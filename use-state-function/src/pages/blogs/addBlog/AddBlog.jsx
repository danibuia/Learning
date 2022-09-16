import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../home/constants/Constants";

function AddPost() {
  const [postTtile, setPostTitle] = useState("");
  const [postSubtitle, setPostSubtitle,] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [accessToken, setAccessToken] = useState('');
  const onAddPost = () => {
    axios
      .post(`${baseUrl}/admins/add-post/all`, {
        postTtile: postTtile,
        postSubtitle: postSubtitle,
        postDescription: postDescription,
        postPhoto: postPhoto,
      },{  headers: { Authorization: `Bearer ${accessToken}` }})
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
}
useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    postPost();
    // eslint-disable-next-line 
}, [accessToken])

  return (
    <>
      <div>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <label htmlFor="Post Title">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Title"
            onChange={(event) => setPostTitle(event.target.value)}
          />
          <label htmlFor="PostDescription">Post Description</label>
          <input
            type="text"
            id="postDescription"
            name="postDescription"
            placeholder="Description"
            onChange={(event) => setPostDescription(event.target.value)}
          />
          <label htmlFor="LastName">Post Subtitle</label>
          <input
            type="text"
            id="PostSubtitile"
            name="PostSubtititle"
            placeholder="Subtitile"
            onChange={(event) => setPostSubtitle(event.target.value)}
          />
          
         <label htmlFor="Photo">Photo</label>
          <input
            type="file"
            id="Photo"
            name="Photo"
            placeholder="Phone Number"
            onChange={(event) => setPostPhoto(event.target.value)}
          />
        
         
         
       </form>
        <button type="button" onClick={onAddPost} disabled={false}>
          Add post
        </button>
      </div>
    </>
  );
}
export default AddPost;