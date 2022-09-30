// GET
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// ADD
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// DELETE
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

// GET
export const getPostRequest = () => {
  // before axios call request
  return {
    type: GET_POSTS_REQUEST,
  };
};

export const getPostSuccess = (response) => {
  // status code 200
  return {
    type: GET_POSTS_SUCCESS,
    payload: response,
  };
};

export const getPostFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error,
  };
};

// ADD
export const addPostRequest = () => {
  // before axios call request
  return {
    type: ADD_POST_REQUEST,
  };
};

export const addPostSuccess = (response) => {
  // status code 201
  return {
    type: ADD_POST_SUCCESS,
    payload: response,
  };
};

export const addPostFailure = (error) => {
  // status code 4XX
  return {
    type: ADD_POST_FAILURE,
    payload: error,
  };
};

// DELETE
export const deletePostRequest = () => {
  // before axios call request
  return {
    type: DELETE_POST_REQUEST,
  };
};

export const deletePostSuccess = (response) => {
  // status code 201
  return {
    type: DELETE_POST_SUCCESS,
    payload: response,
  };
};

export const deletePostFailure = (error) => {
  // status code 4XX
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  };
};
