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
import { initialize as boardIni, reducer as boardReducer } from "./board";

const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBReducer,
    boardAdd: boardAddReducer,
    board: boardReducer,
  }),
  {
    userInfo: userInfoIni,
    userDB: userDBIni,
    boardAdd: boardAddIni,
    board: boardIni,
  },
  composeWithDevTools()
);

export default store;
