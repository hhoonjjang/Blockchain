const TYPE = {
  ADD: "boardAdd/add",
};

const add = (title, contents, date, userInfo) => ({
  type: TYPE.ADD,
  payload: { title, contents, date, userInfo },
});

export const action = { add };

export const initialize = [];
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD:
      console.log(payload.userInfo);
      console.log(payload.title);
      console.log(payload.contents);
      console.log(payload);
      return [...state, payload];
    default:
      return state;
  }
};
