import USER_ACTION_TYPES from "./actionTypes/actionTypes";

const addUser = payload => ({
  type: USER_ACTION_TYPES.ADD_USER,
  payload
});

export default addUser;
