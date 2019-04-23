import SESSION_ACTION_TYPES from "../../actions/session/actionTypes/actionTypes";
import history from "../../history";

export default (state = null, action) => {
  switch (action.type) {
    case SESSION_ACTION_TYPES.LOGOUT:
      history.push("/login");

      return null;
    default:
      return state;
  }
};
