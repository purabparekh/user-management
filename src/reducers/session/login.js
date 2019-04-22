import SESSION_ACTION_TYPES from "../../actions/session/actionTypes/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SESSION_ACTION_TYPES.LOGIN:
      const loggedInUser = action.payload;
      return loggedInUser;
    default:
      return state;
  }
};
