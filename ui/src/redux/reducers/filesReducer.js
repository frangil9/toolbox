const defaultState = [];

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_FILES_SUCCESS":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
