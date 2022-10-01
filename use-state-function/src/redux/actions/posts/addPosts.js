import { request } from "../../../utils/api.config/axios-config";
import {
  addPostFailure,
  addPostRequest,
  addPostSuccess,
} from "../../types/posts/postsTypes";
import { getPosts } from "./getPosts.js";

export const addPost = (
  postTitle,
  postSubtitle,
  postDescription,
  token,
) => {
  return (dispatch) => {
    dispatch(addPostRequest());
    request
      .post(
        `/admins/add-post`,
        {
            postTitle: postTitle,
            postSubtitle: postSubtitle,
            postDescription: postDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("response ", response.data);
        const data = response?.data;
        setTimeout(() => {
          console.log('data: ', data)
          dispatch(addPostSuccess(data));
        }, 2000)
       

      })
      .catch((error) => {
        console.log("error: ", error);
        return dispatch(addPostFailure(error?.response?.data?.message));
      })
      .finally(() => {
        dispatch(getPosts(token));
      });
  };
};
