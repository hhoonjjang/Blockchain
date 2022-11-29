const TYPE = {
  REGIST: "user/regist",
  LOGIN: "user/login",
  LOGOUT: "user/logout",
  //   INPUT: "user/input",
};

// const regist = {
//   type: TYPE.REGIST,
// };

const login = (id) => ({
  type: TYPE.LOGIN,
  payload: { id },
});

const logout = {
  type: TYPE.LOGOUT,
};

const regist = (userInfo) => ({
  type: TYPE.REGIST,
  payload: { userInfo },
});

export const action = { regist, login, logout };

export const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      return { ...state, array: [...state.array, payload] };
    // return {...state,}
    case TYPE.LOGIN:
      return action.payload;
    case TYPE.LOGOUT:
      return "로그아웃";
    default:
      return state;
  }
};
