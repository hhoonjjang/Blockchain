const reducer = (state, action) => {
  // reducer 함수는 Redux내에서 dispatch가 보내준 action을 받아서 작업을 진행한 후 state를 변경(재정의)한다.
  console.log(state, action);
  // action.type, payload
  console.log(state.a);
  switch (action.type) {
    case "plus":
      //  action의 type이 'plus' 일 경우에 기존의 state에 '1'을 추가해라.
      return { a: state.a + action.payload.a };
    // return 된 값은 state에 그대로 정의된다.
    default:
      return state;
  }
};

export default reducer;
