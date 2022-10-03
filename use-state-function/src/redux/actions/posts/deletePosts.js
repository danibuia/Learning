import axios from "axios";
import { baseUrl } from "../../../utils/constants/Constants";
import {
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} from "../../types/posts/postsTypes";

export const deletePost = (postId, token, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(deletePostRequest());
    axios
      .delete(`${baseUrl}/admins/delete-post/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data.message);
        const data = response?.data;
        dispatch(deletePostSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(deletePostFailure(error?.message));
      })
      .finally(() => {
        onFinish();
        console.log(token);
      });
  };
};
