import {allUsersConstants} from "../_constants";

const defaultState = {
  loading: true,
  allUsers: [],
  error: null
}

export const allUsers = (state = defaultState, action) => {
  const {GET_ALL_USERS_REQUEST_AUDIT, GET_ALL_USERS_SUCCESS_REQUEST_AUDIT, GET_ALL_USERS_FAILURE_REQUEST_AUDIT} = allUsersConstants;
    switch (action.type) {
    case GET_ALL_USERS_REQUEST_AUDIT: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_ALL_USERS_SUCCESS_REQUEST_AUDIT: {
      return {
        ...state,
        allUsers: action.allUsers,
        loading: false
      };
    }
    case GET_ALL_USERS_FAILURE_REQUEST_AUDIT:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}


