export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export const getProjectsRequest = () => {
  return {
    type: GET_PROJECTS_REQUEST
  }
};

export const getProjectsSuccess = (response) => {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload: response
  }
};

export const getProjectsFailure = (error) => {
  return {
    type: GET_PROJECTS_FAILURE,
    payload: error
  }
};