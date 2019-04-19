import USER_ACTION_TYPES from "./actionTypes/actionTypes";

const deleteUser = payload => ({
  type: USER_ACTION_TYPES.DELETE_USER,
  payload
});

export default deleteUser;
