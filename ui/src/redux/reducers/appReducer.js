import { combineReducers } from "redux";
import error from "./errorReducer";
import loading from "./loadingReducer";
import files from "./filesReducer";

export const appReducer = combineReducers({
  loading,
  error,
  files
});
