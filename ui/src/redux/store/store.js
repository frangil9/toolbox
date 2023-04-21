import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "../reducers/appReducer";

const rootReducer = (state, action) => {
    if (action.type === "DEFAULT_STATE") {
        state = undefined;
    }
    return appReducer(state, action);
};

const globalState = window.localStorage.getItem("GLOBAL_STATE");
const initialState = globalState ? JSON.parse(globalState) : undefined;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export const saveState = () => {
    const state = store.getState();
    const stateClone = { ...state, error: null, loading: false };
    window.localStorage.setItem("GLOBAL_STATE", JSON.stringify(stateClone));
};

export default store;
