import axios from "axios";
import { baseUrl } from "../../../pages/home/constants/Constants";
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
    axios
      .post(
        `${baseUrl}/admins/add-post`,
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
        dispatch(addPostSuccess(data));
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
