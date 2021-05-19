import { allUsersConstants } from "../_constants";
import { userService } from "../_services";



export const getAllUsers = () => {
    const { GET_ALL_USERS_REQUEST_AUDIT,
        GET_ALL_USERS_SUCCESS_REQUEST_AUDIT,
        GET_ALL_USERS_FAILURE_REQUEST_AUDIT
    } = allUsersConstants
    return (dispatch) => {
      dispatch(request());
      userService.getAllAudit().then(
        (allUsers) =>{dispatch(success(allUsers))},
        (error) => dispatch(failure(error.toString()))
      );
    };
  
    function request() {
      return { type: GET_ALL_USERS_REQUEST_AUDIT };
    }
    function success(allUsers) {
      return { type: GET_ALL_USERS_SUCCESS_REQUEST_AUDIT, allUsers };
    }
    function failure(error) {
      return { type: GET_ALL_USERS_FAILURE_REQUEST_AUDIT, error };
    }
  }