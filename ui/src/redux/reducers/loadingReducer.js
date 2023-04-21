const defaultState = false;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
