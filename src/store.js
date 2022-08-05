import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.slice";
import { assignmentSlice } from "./slices/assignment.slice";
import { displayAssignmentSlice } from "./slices/displayAssignment.slice";
const reducer = {
  user: userSlice.reducer,
  assignment: assignmentSlice.reducer,
  displayAssignment: displayAssignmentSlice.reducer,
};
export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
