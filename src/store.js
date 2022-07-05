import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.slice";
const reducer = {
  user: userSlice.reducer,
};
export default configureStore({
  reducer: reducer,
});
