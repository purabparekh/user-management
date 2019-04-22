import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";

import addUser from "./addUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

import { users } from "../../services/UserService";

export default (state = users, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.ADD_USER:
      return addUser(state, action);
    case USER_ACTION_TYPES.UPDATE_USER:
      return updateUser(state, action);
    case USER_ACTION_TYPES.DELETE_USER:
      return deleteUser(state, action);
    default:
      return state;
  }
};

// // import { combineReducers } from "redux";
// import addUser from "./addUser";
// import updateUser from "./updateUser";
// import deleteUser from "./deleteUser";

// // export default combineReducers({
// //   addUser,
// //   updateUser,
// //   deleteUser
// // });
// export default (state, action) => {
//   return {
//     addUser: addUser(state, action),
//     updateUser: updateUser(state, action),
//     deleteUser: deleteUser(state, action)
//   };
// };

// import USER_ACTION_TYPES from "../../actions/user/actionTypes/actionTypes";
// import User from "../../models/User";

// export default (state, action) => {
//   switch (action.type) {
//     case USER_ACTION_TYPES.ADD_USER:
//       console.log(USER_ACTION_TYPES.ADD_USER, " called");
//       const newUser = action.payload;
//       return {
//         ...state,
//         users: [newUser, ...state.users]
//       };
//     case USER_ACTION_TYPES.UPDATE_USER:
//       console.log(USER_ACTION_TYPES.UPDATE_USER, " called");
//       const modifiedUser = action.payload;
//       const userIndex = state.users.findIndex(
//         user => user.id === modifiedUser.id
//       );
//       const users = [].concat(
//         state.users.slice(0, userIndex),
//         [new User({ ...modifiedUser })],
//         state.users.slice(userIndex + 1)
//       );
//       return {
//         ...state,
//         users
//       };
//     case USER_ACTION_TYPES.DELETE_USER:
//       const userToDelete = action.payload;
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== userToDelete.id)
//       };
//     default:
//       return state;
//   }
// };
