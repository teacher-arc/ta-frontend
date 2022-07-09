import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.slice";
import { assignmentSlice } from "./slices/assignment.slice";
const reducer = {
  user: userSlice.reducer,
  assignment: assignmentSlice.reducer,
};
export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
