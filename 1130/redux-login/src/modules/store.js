import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import {
  initialize as boardAddIni,
  reducer as boardAddReducer,
} from "./boardAdd";

const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBReducer,
    boardAdd: boardAddReducer,
  }),
  { userInfo: userInfoIni, userDB: userDBIni, boardAdd: boardAddIni },
  composeWithDevTools()
);

export default store;
