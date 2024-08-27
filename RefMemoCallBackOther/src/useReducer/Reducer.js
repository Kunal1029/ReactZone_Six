export const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "hid":
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
