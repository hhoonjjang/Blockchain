const reducer = (state = 0, action) => {
  console.log(state, action);
  const { type, payload } = action;
  switch (type) {
    case "count1/Plus":
      //   return { ...state, count1: state.count1 + +payload.input };
      return state + +payload.input;
    case "count1/Minus":
      // count1/minus 형식처럼 /로 나누면
      // 앞에 count1이 store 내의 state 자체를 의미하게된다.
      // reducer가 가져오는 state는 store 내의 count1이 된다.

      //   return { ...state, count1: state.count1 - +payload.input };
      //...state<< 기존에 state를 넣는다.
      //   count1 : state.count1 + payload.input<< count1 프로퍼티에 payload로 받은
      // input 프로퍼티를 더한다.
      return state - +payload.input;
    default:
      return state;
  }
};

export default reducer;
