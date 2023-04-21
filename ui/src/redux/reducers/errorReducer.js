const defaultState = null;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ERROR":
      return action.payload;
    case "CLEAR_ERROR":
      return null;
    default:
      return state;
  }
}

export default reducer;
