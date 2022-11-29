import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as count1In } from "./modules/count1";
import { initialize as count2In } from "./modules/count2";

import { reducer as count1 } from "./modules/count1";
import { reducer as count2 } from "./modules/count2";

const store = createStore(
  combineReducers({ count1, count2 }),
  { ...count1In, ...count2In },
  composeWithDevTools()
);

export default store;
