import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.DELETE_USER:
      const userToDelete = action.payload;
      return {
        ...state,
        users: state.users.filter(user => user.id !== userToDelete.id)
      };
    default:
      return state;
  }
};
