import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";
import User from "../../models/User";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.UPDATE_USER:
      const modifiedUser = action.payload;
      const userIndex = state.users.findIndex(
        user => user.id === modifiedUser.id
      );
      const users = [].concat(
        state.users.slice(0, userIndex),
        [new User({ ...modifiedUser })],
        state.users.slice(userIndex + 1)
      );
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};
