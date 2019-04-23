import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";
import User from "../../models/User";

export default (state = [], action) => {
  // console.log(state, action);
  switch (action.type) {
    case USER_ACTION_TYPES.UPDATE_USER:
      const modifiedUser = action.payload;
      const userIndex = state.findIndex(user => user.id === modifiedUser.id);
      const users = [].concat(
        state.slice(0, userIndex),
        [new User({ ...modifiedUser })],
        state.slice(userIndex + 1)
      );
      return users;
    default:
      return state;
  }
};
