import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import createEngine from "redux-storage-engine-localstorage";
// import { devToolsEnhancer } from "redux-devtools-extension";
import * as storage from "redux-storage";
import sessionReducer from "./reducers/session/sessionReducer";
import userReducer from "./reducers/user/userReducer";
import { users } from "./services/UserService";
// import { LOAD } from "redux-storage";

export const INITIAL_STATE = {
  users,
  loggedInUser: null,
  // loggedInUser: users[0],
  storeLoaded: false
};

function storageAwareReducer(state = false, action) {
  switch (action.type) {
    case "LOAD":
      return true;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  storageAwareReducer,
  sessionReducer,
  userReducer
});
// const rootReducer = userReducer;

const reducer = storage.reducer(rootReducer);
const engine = createEngine("quisqueya");
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  {
    sessionReducer: INITIAL_STATE.loggedInUser,
    userReducer: INITIAL_STATE.users,
    storageAwareReducer: INITIAL_STATE.storeLoaded
  }
  // INITIAL_STATE
  // devToolsEnhancer
);
const load = storage.createLoader(engine);
load(store)
  .then(() => {
    store.dispatch({ type: "LOAD" });
  })
  // .then(newState => console.log("Loaded state:", newState))
  .catch(error => console.log("Failed to load previous state", error));

export default store;
