import axios from "axios";
import { baseUrl } from "../../../pages/home/constants/Constants";
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
        console.log("members: ", response.data);
        const myData = response?.data?.posts;

        const newData = myData.map((item, index) => {
          //map is a function in JS arrays - it will return an array with the same lenght but modified as we want
          // console.log("index: ", index);

          return { ...item, id: index }; // '... item' means that it will add every item from mapped array - myData - and it will show the
          // object with  all properties + id with the value index that represend the item position from
          // array starting from 0
        });
        dispatch(getPostSuccess(newData));
      })
      .catch((error) => {
        console.log("error: ", error);
        dispatch(getPostFailure(error.data));
      });
  };
};
