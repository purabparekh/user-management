import USER_ACTION_TYPES from "./actionTypes/actionTypes";
// import axios from "axios";
import { users } from "../../services/UserService";
import store from "../../store";

const getUsers = () => {
  return (dispatch, getState) => {
    console.log(getState());
    console.log(store.getState());
    dispatch(getUsersStarted());

    // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
    //   console.log(res);
    //   dispatch(getUsersSuccess(users));
    // });

    // To simulate network delay
    // setTimeout(() => {
    dispatch(getUsersSuccess(users));
    // dispatch(getUsersFailure(error));
    // }, 1000);
  };
};

const getUsersStarted = () => ({
  type: USER_ACTION_TYPES.GET_USERS_STARTED
});

const getUsersSuccess = users => ({
  type: USER_ACTION_TYPES.GET_USERS_SUCCESS,
  payload: users
});

// const getUsersFailure = error => ({
//   type: USER_ACTION_TYPES.GET_USERS_FAILURE,
//   payload: error
// });

export default getUsers;
