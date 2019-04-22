import SESSION_ACTION_TYPES from "./actionTypes/actionTypes";

const logout = payload => ({
  type: SESSION_ACTION_TYPES.LOGOUT,
  payload
});

export default logout;
