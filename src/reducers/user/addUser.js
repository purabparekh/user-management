import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.ADD_USER:
      const newUser = action.payload;
      return {
        ...state,
        users: [newUser, ...state.users]
      };
    default:
      return state;
  }
};
