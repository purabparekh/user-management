import SESSION_ACTION_TYPES from "../../actions/session/actionTypes/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case SESSION_ACTION_TYPES.LOGOUT:
      return null;
    default:
      return state;
  }
};
