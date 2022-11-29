const reducer = (state = [], action) => {
  console.log(state, action);
  const { type, payload } = action;
  switch (type) {
    case "add":
      return [...state, payload.array];
    case "remove":
      // {
      //   const tempArr = [...state];
      //   tempArr.pop();
      //   tempArr.shift();
      //   return tempArr;
      // }
      return state.slice(0, state.length - 1);

    case "selectRemove": {
      let tempArr = state.filter((item) => item != payload.array);
      return tempArr;
    }
    case "edit": {
      let tempIndex = state.findIndex((item) => item == payload.array);
      // console.log(payload.edit);
      // console.log(tempIndex);
      let tempArr = [...state];
      // console.log(tempArr.replace(payload.array, payload.edit));
      tempArr[tempIndex] = payload.edit;
      // tempArr[tempIndex].replace(payload.array, payload.edit);

      return tempArr;
    }

    case "edit1": {
      let tempArr = [...state];
      tempArr[payload.searchIndex] = payload.tempValue;
      return tempArr;
    }

    default:
      return state;
  }
};

export default reducer;
