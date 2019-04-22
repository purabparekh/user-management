import { createStore, applyMiddleware } from "redux";
import createEngine from "redux-storage-engine-localstorage";
// import { devToolsEnhancer } from "redux-devtools-extension";
import * as storage from "redux-storage";
import userReducer from "./reducers/user/userReducer";
import { users } from "./services/UserService";

export const INITIAL_STATE = {
  users,
  loggedInUser: users[0]
};

// const rootReducer = combineReducers({ userReducer });
const rootReducer = userReducer;

const reducer = storage.reducer(rootReducer);
const engine = createEngine("quisqueya");
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  INITIAL_STATE
  // devToolsEnhancer
);
const load = storage.createLoader(engine);
load(store);
// .then(newState => console.log("Loaded state:", newState))
// .catch(() => console.log("Failed to load previous state"));

export default store;
