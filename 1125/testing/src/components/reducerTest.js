export function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    case "divide":
      return state / 10;
    case "multiple":
      return state * 10;

    default:
      return 0;
  }
}
