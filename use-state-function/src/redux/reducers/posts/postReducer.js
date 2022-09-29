import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCES,
} from "../../types/posts/postsTypes";

const initialState = {
  loading: false,
  hasErrors: {
    status: false,
    message: "",
  },
  posts: [],
  post: {},
  postIdSelected: "",
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: "",
          status: false,
        },
        posts: [...action?.payload],
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload?.message,
        },
      };
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: false,
          message: "",
        },
        post: action?.payload?.post,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload,
        },
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCES:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: false,
          message: "",
        },
        post: action?.payload?.post,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload,
        },
      };
    default:
      return state;
  }
};
