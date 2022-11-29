import Count2Comp from "../components/Count2";
import { connect } from "react-redux";
import { action } from "../modules/count1";

const Count2Container = ({ count2 = 0, plus, minus, input }) => {
  console.log(count2);
  //   const plus = () => {};
  //   const minus = () => {};
  //   const input = (input) => {};
  return (
    <Count2Comp
      count2={count2}
      plus={plus}
      minus={minus}
      input={input}
    ></Count2Comp>
  );
};

const mapStateToProps = (state, props) => {
  return { count2: state.count2, ...props };
  //   객체 내의 값이 그대로 props로 전달된다.
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(action.plus);
    },
    minus: () => {
      dispatch(action.minus);
    },
    input: (input) => {
      dispatch(action.input(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);
// connect는 매개변수로 mapStatetoProps 콜백함수 또는 mapStateToProps 와 mapDispatchToProps 콜백함수를 받는다.
// mapStateToProps 콜백함수의 콜백함수와 mapDispatchToprops 콜백함수의 return 값은 객체로 보낸다.
// mapStateToProps 콜백함수의 매개변수로는 state와 props를 받느낟.
// -state는 store(redux)의 state이다.
// -props는 상위컴포넌트(현재는 App.js)에서 전달한 props이다.

// mapDispatchToprops 콜백함수의 매개변수로는 dispatch를 받는다.
//  -dispatch는 store의 dispatch 메소드 이다.
//  connect의 매개변수인 두 콜백함수의 return 값인 객체는 합쳐져서 다음 컴포넌트(Count2Contatiner)props로 전달한다.
