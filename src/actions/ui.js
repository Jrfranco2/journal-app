import { types } from "../types/types";

export const serErrorAction = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});
