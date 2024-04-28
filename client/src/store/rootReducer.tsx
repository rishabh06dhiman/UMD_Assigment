// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  data: usersSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
