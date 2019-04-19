import USER_ACTION_TYPES from "./actionTypes/actionTypes";

const updateUser = payload => ({
  type: USER_ACTION_TYPES.UPDATE_USER,
  payload
});

export default updateUser;
