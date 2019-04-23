import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USERS_STARTED:
      return [];
    case USER_ACTION_TYPES.GET_USERS_SUCCESS:
      return action.payload;
    case USER_ACTION_TYPES.GET_USERS_FAILURE:
      return [];
    default:
      return state;
  }
};
