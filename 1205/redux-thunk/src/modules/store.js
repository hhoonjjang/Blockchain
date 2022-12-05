import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import { reducer, initialize } from "./count";

const store = createStore(
  combineReducers({ count: reducer }),
  { count: initialize },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
