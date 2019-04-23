import SESSION_ACTION_TYPES from "../../actions/session/actionTypes/actionTypes";
import history from "../../history";

export default (state = {}, action) => {
  switch (action.type) {
    case SESSION_ACTION_TYPES.LOGIN:
      const loggedInUser = action.payload;
      history.push("/");
      return loggedInUser;
    default:
      return state;
  }
};
