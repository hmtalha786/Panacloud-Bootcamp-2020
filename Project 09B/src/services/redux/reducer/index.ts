import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import diaryReducer from "../slices/diary";
import entryReducer from "../slices/entry";

const rootReducer = combineReducers({
  auth: authReducer,
  diary: diaryReducer,
  entry: entryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
