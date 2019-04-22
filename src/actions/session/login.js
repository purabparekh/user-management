import SESSION_ACTION_TYPES from "./actionTypes/actionTypes";

const login = payload => ({
  type: SESSION_ACTION_TYPES.LOGIN,
  payload
});

export default login;
