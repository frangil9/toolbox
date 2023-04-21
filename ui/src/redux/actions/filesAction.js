import { getFilesData } from "../../api/file";
import loading from "./loadingAction";

export const getFilesSuccess = (files) => {
  return {
    type: "GET_FILES_SUCCESS",
    payload: files,
  };
};

export const getFilesDataThuk = (fileName) => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    try {
      const res = await getFilesData(fileName);
      const { data } = res;
      let filesArray = [];
      for (const file of data) {
        for (const line of file.lines) {
          filesArray.push({ ...line, file: file.file });
        }
      }
      dispatch(getFilesSuccess(filesArray));
      dispatch(loading(false));
    } catch {
      dispatch(getFilesSuccess([]));
      dispatch(loading(false));
    }
  };
};
