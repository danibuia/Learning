import axios from "axios";
import { baseUrl } from "../../../utils/constants/Constants";
import {
  getPostFailure,
  getPostRequest,
  getPostSuccess,
} from "../../types/posts/postsTypes";

export const getPosts = (token) => {
  return (dispatch) => {
    dispatch(getPostRequest());
  axios
      .get(`${baseUrl}/admins/get-posts/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("posts: ", response.data.posts);
        setTimeout(() => {
          dispatch(getPostSuccess(response.data.posts));
        }, 2000)
      
      })  
      
      .catch((error) => {
        console.log("error: ", error);
        dispatch(getPostFailure(error.data));
      });
  };
};
