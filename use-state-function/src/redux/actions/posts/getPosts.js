import { request } from "../../../utils/api.config/axios-config";
import {
  getPostFailure,
  getPostRequest,
  getPostSuccess,
} from "../../types/posts/postsTypes";

export const getPosts = (token) => {
  return (dispatch) => {
    dispatch(getPostRequest());
   request
      .get(`/admins/get-posts/all`, {
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
