// Container vs Components
//  Javascript 등의 로직 vs HTML 구조
// 나누는 이유 : 가시성? 리뷰, 유지보수에 좋다.

import { useState } from "react";

import Count1Comp from "../components/Count1";
import store from "../store";
import { action } from "../modules/count1";

const Count1Container = () => {
  const count1 = store.getState().count1;
  const [_, redner] = useState(true);
  const plus = () => {
    store.dispatch(action.plus);
    redner((state) => !state);
  };

  const minus = () => {
    store.dispatch(action.minus);
    redner((state) => !state);
  };
  const input = (input) => {
    store.dispatch(action.input);
    redner((state) => !state);
  };
  return <Count1Comp plus={plus} minus={minus} input={input} />;
};

export default Count1Container;
