import { combineReducers } from "redux";
// combineReducers 메소드는 전달받은 reducer의 모음 객체를 하나로 묶어준다.

import count1 from "./count1";
import count2 from "./count2";
import array from "./array";
export default combineReducers({ count1, count2, array });
// combineReducers 메소드는 하나로 통합된 reducer 메소드를 반환한다.
