import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
  ADD_MEMBER_FAILURE,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  DELETE_MEMBER_FAILURE,
  DELETE_MEMBER_REQUEST,
  DELETE_MEMBER_SUCCESS,

} from "../../types/members/membersTypes"

const initialState = {
  loading: false,
  hasErrors: {
    status: false,
    message: ''
  },
  members: [],
  member: {},
  memberIdSelected: ''
}

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET

    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: '',
          status: false
        },
        members: [...action?.payload]
      }
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload?.message,
        },
      };

    //ADD

    case ADD_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: false,
          message: '',
        },
        member: action?.payload?.member,
      };
    case ADD_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload,
        },
      };

    //DELETE

    case DELETE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: action?.payload?.message,
        },
        // members: action?.payload?.members
      };
    case DELETE_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload,
        },
      };

    default:
      return state;
  }
};