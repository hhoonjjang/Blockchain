import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./modules/user";

const store = createStore(reducer, { array: [] }, composeWithDevTools());

export default store;
