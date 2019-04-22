import SESSION_ACTION_TYPES from "../../actions/session/actionTypes/actionTypes";

import login from "./login";
import logout from "./logout";

export default (state = null, action) => {
  switch (action.type) {
    // case SESSION_ACTION_TYPES.LOGIN:
    //   return {
    //     ...state,
    //     sessionReducer: login(state.sessionReducer, action)
    //   };
    // case SESSION_ACTION_TYPES.LOGOUT:
    //   return {
    //     ...state,
    //     sessionReducer: logout(state.sessionReducer, action)
    //   };
    case SESSION_ACTION_TYPES.LOGIN:
      return login(state, action);
    case SESSION_ACTION_TYPES.LOGOUT:
      return logout(state.sessionReducer, action);
    default:
      return state;
  }
};
