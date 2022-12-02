//회원가입한 유저들의 정보
const TYPE = {
  REGIST: "userDB/regist",
};

const regist = (userId, userPw, userName) => {
  // 8. regist를 호출당했다. 매개변수3개로 받았다.
  console.log("action regist");
  //   9.{type:TYPE.REGIST, payload:{userId,userPw,userName}}을 반환했다.
  return {
    type: TYPE.REGIST,
    payload: {
      userId,
      userPw,
      userName,
    },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  // 12. dispatch가 액션을 매개변수로 보내며 호출했다.
  // state는 기존의 상태값이다.
  // - state는 combineReducers의 사용 여부에 따라서 달라진다.
  console.log(action);
  const { type, payload } = action;
  //   13. type에 따라서 state를 재정의한다. 재정의하고 싶은 정보를 return한다.
  console.log(state);
  switch (type) {
    case TYPE.REGIST: {
      return state.find((item) => item.userId === payload.userId)
        ? state
        : [...state, payload];
    }
    // if(state.find((item)=>item.userId ===payload.userId))
    // return state;
    // else return [...state,payload];
    //   return [...state, payload];
    default:
      return state;
  }
};

//삼항연산자 =>조건 ? 참:거짓
// const temp = isBool ? 'true' : 'false'
// if문을 써서 사용하려면
// function check(isBool){
// if(isBool) return 'true
// else 'false
// }
// const temp =check(isBool);
