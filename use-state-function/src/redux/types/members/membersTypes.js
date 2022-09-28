//GET
export const GET_MEMBERS_REQUEST = 'GET_MEMBERS_REQUEST';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET_MEMBER_FAILURE';

//ADD
export const ADD_MEMBER_REQUEST = 'ADD_MEMBER_REQUEST';
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
export const ADD_MEMBER_FAILURE = 'ADD_MEMBER_FAILURE';

//DELETE
export const DELETE_MEMBER_REQUEST = 'DELETE_MEMBER_REQUEST';
export const DELETE_MEMBER_SUCCESS = 'DELETE_MEMBER_SUCCESS';
export const DELETE_MEMBER_FAILURE = 'DELETE_MEMBER_FAILURE';

//UPDATE
// export const UPDATE_MEMBER_REQUEST = 'UPDATE_MEMBER_REQUEST';
// export const UPDATE_MEMBER_SUCCESS = 'UPDATE_MEMBER_SUCCESS';
// export const UPDATE_MEMBER_FAILURE = 'UPDATE_MEMBER_FAILURE';

export const getMembersRequest = () => { // before axios call request
  return {
    type: GET_MEMBERS_REQUEST
  }
};

export const getMembersSuccess = (response) => {// status code 200
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: response
  }
};

export const getMembersFailure = (error) => {
  return {
    type: GET_MEMBERS_FAILURE,
    payload: error
  }
};

export const addMemberRequest = () => {
  return {
    type: ADD_MEMBER_REQUEST
  }
}

export const addMemberSuccess = (response) => {
  return {
    type: ADD_MEMBER_SUCCESS,
    payload: response
  }
}

export const addMemberFailure = (error) => {
  return {
    type: ADD_MEMBER_FAILURE,
    payload: error
  }
}


export const deleteMemberRequest = () => {
  return {
    type: DELETE_MEMBER_REQUEST
  }
}

export const deleteMemberSuccess = (response) => {
  return {
    type: DELETE_MEMBER_SUCCESS,
    payload: response
  }
}
export const deleteMemberFailure = (error) => {
  return {
    type: DELETE_MEMBER_FAILURE,
    payload: error
  }
  // export const updateMemberRequest = () => {
  //   return {
  //       type: UPDATE_MEMBER_REQUEST
  //   }
  // }
  
  // export const updateMemberSuccess = (response) => {
  //   return {
  //       type: UPDATE_MEMBER_SUCCESS,
  //       payload: response
  //   }
  // }
  
  // export const updateMemberFailure = (error) => {
  //   return {
  //       type: UPDATE_MEMBER_FAILURE,
  //       payload: error
  //   }
  // }
}