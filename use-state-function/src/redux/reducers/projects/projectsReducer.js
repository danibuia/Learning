import { GET_PROJECTS_FAILURE, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS } from "../../types/projects/projectsTypes"

const initialState = {
    loading: false,
    hasErrors: {
      status: false,
      message: ''
    },
    members: [],
    member: {}
  }
  
  export const memberReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROJECTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case GET_PROJECTS_SUCCESS:
        return {
          ...state,
          loading: false,
          hasErrors: {
            message: '',
            status: false
          },
          members: [...state.members, ...action.payload]
        }
      case GET_PROJECTS_FAILURE:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: true,
            message: action.payload
          }
        }
      default: 
        return state
    }
  }